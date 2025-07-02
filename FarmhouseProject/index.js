import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import contactDetailsRoutes from "./routes/contactDetails.routes.js";
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
app.use("/contact", contactDetailsRoutes);
app.get("/booking", (req, res) => {
  res.render("booking");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/services", (req, res) => {
  res.render("services");
});
app.get("/", (req, res) => {
  res.render("home");
});

// Port Setup
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
