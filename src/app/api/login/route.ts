import { connectDB } from '@/lib/Database';
import { User } from '@/models/User.model';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'; // use env in production

export async function POST(req: NextRequest) {
  await connectDB();
  const body = await req.json();
  const { email, password } = body;
  // console.log('Login attempt:', { phone });
  const phone=email;
  let user = await User.findOne({ email });
  let userPhone = null;
  if (!user) {
    userPhone = await User.findOne({ phone });
    if( userPhone ) {user = userPhone;
      // break
    }
    else
    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
  }

  // Create token
  const token = jwt.sign(
    { userId: user._id, email: user.email },
    JWT_SECRET,
    { expiresIn: '7d' }
  );

  const response = NextResponse.json({ success: true, user });

  // Set token as cookie
  response.cookies.set('token', token, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return response;
}
