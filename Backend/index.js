import express from "express";
import cors from "cors";
import connectDB from "./config/database.js";
import contactDetailsRoutes from "./routes/contactDetails.routes.js";
import bookingDetailsRoutes from "./routes/booking.routes.js";
import userRoutes from "./routes/user.route.js";
import session from "express-session";

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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
