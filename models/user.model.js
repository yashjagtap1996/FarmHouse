import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  passWord: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model("User", userSchema);
