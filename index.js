import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import contactDetailsRoutes from "./routes/contactDetails.routes.js";
import userRoutes from "./routes/user.routes.js";
import expressEjsLayouts from "express-ejs-layouts";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressEjsLayouts);

// Static Files
app.use(express.static("public"));

// View Engine
app.set("view engine", "ejs");
app.set("layout", "layout");

// Routes
app.use("/", contactDetailsRoutes); // e.g., /contact/submit
app.use("/", userRoutes); // Handles /signup, /login, etc.

// Static Page Routes
app.get("/", (req, res) => res.render("home"));
app.get("/about", (req, res) => res.render("about"));
app.get("/services", (req, res) => res.render("services"));
app.get("/gallery", (req, res) => res.render("gallery"));
app.get("/booking", (req, res) => res.render("booking"));
app.get("/login", (req, res) => res.render("login"));

// Port Setup
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
