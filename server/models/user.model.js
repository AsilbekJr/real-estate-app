import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp",
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
