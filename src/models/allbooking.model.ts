// models/allBooking.model.ts
import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface IAllBooking extends Document {
  name: string;
  email: string;
  phone: string;
  city: string;
  fault: string;
  brand: string;
//   model: string;
  deviceType: string;
  date: Date;
}

const AllBookingSchema = new Schema<IAllBooking>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    city: { type: String, required: true },
    fault: { type: String, required: true },
    brand: { type: String, required: true },
    // model: { type: String, required: true },
    deviceType: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const AllBooking = models.AllBooking || model<IAllBooking>('AllBooking', AllBookingSchema);
