import { BookingDetails } from "../models/bookingDetails.model.js";

export const bookingDetails = async (req, res) => {
  const {
    name,
    email,
    phone,
    checkIn,
    checkOut,
    guests,
    requests,
    totalAmount, // fixed naming
  } = req.body;

  function parseAndValidateDate(dateStr) {
    const d = new Date(dateStr);
    return d instanceof Date && !isNaN(d) ? d : null;
  }

  const checkInDate = parseAndValidateDate(checkIn);
  const checkOutDate = parseAndValidateDate(checkOut);

  if (!checkInDate || !checkOutDate) {
    return res
      .status(400)
      .json({ message: "Invalid check-in or check-out date" });
  }

  try {
    const existingBooking = await BookingDetails.findOne({
      checkIn: { $lt: checkOutDate },
      checkOut: { $gt: checkInDate },
    });

    if (existingBooking) {
      return res
        .status(400)
        .json({ message: "Booking already exists for these dates." });
    }

    const booking = new BookingDetails({
      name,
      email: email.toLowerCase(),
      phone,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      guests,
      requests,
      totalAmount,
    });

    await booking.save();
    res.status(201).json({ message: "Booking successfully" });
  } catch (error) {
    console.error("Error during booking:", error);
    res.status(500).json({ error: "Server error" });
  }
};
