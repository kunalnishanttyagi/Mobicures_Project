import { connectDB } from '@/lib/Database';
import { User } from '@/models/User.model';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export async function POST(req: NextRequest) {
  await connectDB();
  const body = await req.json();
  const { email, password } = body;

  const phone = email; // assuming login can be with phone or email

  let user = await User.findOne({ email });
  if (!user) {
    user = await User.findOne({ phone });
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return NextResponse.json(
      { success: false, message: 'Invalid credentials' },
      { status: 401 }
    );
  }

  const token = jwt.sign(
    {
      email: user.email,
      name: user.name,
      id: user._id,
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  );

  // ✅ Send token in response
  return NextResponse.json(
    { success: true, token, message: 'Login successful' },
    { status: 200 }
  );
}
