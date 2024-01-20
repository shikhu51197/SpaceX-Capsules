import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

  username: {
    type: "string",
    required: [true, "Please enter Your  UserName"],
  },
  email: {
    type: String,
    required: [true, "Please enter Your Email"],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Please enter Your Password"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

});


const User = mongoose.model('User', userSchema);

export { User }; 