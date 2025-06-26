import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/Database';
import { User } from '@/models/User.model';
// import { IBooking } from '@/models/booking.model';
import { AllBooking } from '@/models/allbooking.model';
const resend = new Resend(process.env.RESEND_API);

export async function POST(request: Request) {
  try {
    await connectDB();
    console.log('Received POST request to /api/send');
    const body = await request.json();
    console.log('Received request body:', body);

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // ✅ Use a valid verified sender
      to: ['kirantyagi2000@gmail.com'], // ✅ Fix typo
      subject: 'Hello world',
      react: EmailTemplate({ name: body.name || 'User', email: body.email, phone: body.phone, brand: body.brand, deviceType: body.device, fault: body.issue, city: body.city }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
    
    const newBooking = await AllBooking.create(body);
    // const bookingg = {
    //   name:body.name,
    //   email: body.email,
    //   phone: body.phone,
    //   city: body.city,
    //   brand: body.brand,
    // //   model: body.model,
    //   fault: body.issue,
    //   deviceType: body.deviceType,
    //   date: new Date()
    // };

    // // ✅ Save to global bookings
    // const dataa=await AllBooking.create(bookingg);
    // console.log('Booking saved to global bookings:', dataa);
    // const booking = {
    //   brand:body.brand,
    // //   body.model,
    //   deviceType: body.deviceType,
    //   fault: body.issue,
    //   date: new Date()
    // };

    // // Find user by phone or email
    let user = await User.findOne({ $or: [{ phone:body.phone }, { email:body.email }] });

    if (user) {
      // Push new booking to existing user
    //   user.bookings.push(booking);
    //   await user.save();
    user.bookings = [...user.bookings, newBooking._id];
      console.log('Booking added to existing user');
    }
    
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
