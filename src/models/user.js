import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,

    phone: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      default: "Rwanda",
    },
    gender: {
      type: String,
      enum: ["female", "male"],
    },
    role: {
      type: String,
      enum: ["admin", "user", "tutor"],
      default: "user",
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const user = mongoose.model("User", userSchema);
export default user;
