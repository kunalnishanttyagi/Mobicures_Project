import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface IBooking {
  fault: string;
  brand: string;
//   model: string;
  deviceType: string;
  date: Date;
}

const BookingSchema = new Schema<IBooking>(
  {
    fault: { type: String, required: true },
    brand: { type: String, required: true },
    // model: { type: String, required: true },
    deviceType: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  { _id: false }
);

export { BookingSchema };
