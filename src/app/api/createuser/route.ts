import { connectDB } from '@/lib/Database';
import { User } from '@/models/User.model';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
export async function POST(req: NextRequest) {
  console.log('POST request received at /api/send/CreateUser');
  try {
    console.log('Received POST request to /api/send/CreateUser');
    await connectDB();
    const body = await req.json();

    const { name, email, phone,password } = body;
    const city="ghaziabad";
    const bookings=[];
    console.log('Received request body:', body,city,bookings);

    // Check if user already exists
    const existing = await User.findOne({ email });

    if (existing) {
      return NextResponse.json({ success: false, message: 'User already exists' }, { status: 400 });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name:name,
      email:email,
      phone:phone,
      password:hashedPassword,
      city: city , // default value if city is not provided
      bookings: bookings, // optional
    });

    return NextResponse.json({ success: true, user: newUser });
  } catch (error: any) {
    console.error('Create User Error:', error.message);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
