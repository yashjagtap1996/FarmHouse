import mongoose from "mongoose";

const bookingDetailsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  checkIn: {
    type: Date,
    required: true,
  },
  checkOut: {
    type: Date,
    required: true,
  },
  guests: {
    type: Number,
    required: true,
  },
  requests: {
    type: String,
    default: "",
  },
  totalAmount: {
    type: Number,
    required: true,
  },
});

export const BookingDetails = mongoose.model("Booking", bookingDetailsSchema);
