import express from "express";
import cors from "cors";
import connectDB from "./config/database.js";
import contactDetailsRoutes from "./routes/contactDetails.routes.js";
import bookingDetailsRoutes from "./routes/booking.routes.js";
import userRoutes from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import session from "express-session";
import { BookingDetails } from "./models/bookingDetails.model.js";

connectDB();
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Your React frontend URL
    credentials: true, // Allow cookies (needed for express-session)
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: "myuser",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 1 day
  })
);

app.use("/contact", contactDetailsRoutes);
app.use("/", userRoutes);
app.use("/booking", bookingDetailsRoutes);
app.use("/auth", authRoute);
app.post("/check-availability", async (req, res) => {
  const { checkIn, checkOut, guests } = req.body;

  // Example: Check if booking already exists
  const existingBooking = await BookingDetails.findOne({
    $or: [
      {
        checkIn: { $lt: new Date(checkOut) },
        checkOut: { $gt: new Date(checkIn) },
      },
    ],
  });

  if (existingBooking) {
    return res.json({
      available: false,
      message: "Sorry, dates are not available.",
      type: "danger",
    });
  }

  res.json({
    available: true,
    message: "Dates are available! You can proceed.",
    type: "success",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
