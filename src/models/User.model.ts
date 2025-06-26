import mongoose, { Schema, Document, model, models, Types } from 'mongoose';
import { BookingSchema } from './booking.model';

export interface IUser extends Document {
  name: string;
  email: string;
  phone: string;
  city?: string;
  password: string; // Assuming password is required
  bookings: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    city: { type: String, default: '' },
    password: { type: String, required: true }, // Password field
    bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking', default: [] }] // Array of Booking references
  },
  { timestamps: true }
);

export const User = models.User || model<IUser>('User', UserSchema);
