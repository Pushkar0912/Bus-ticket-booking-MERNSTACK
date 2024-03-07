import mongoose from 'mongoose';

// Define the BusDetails schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: email,
    unique: true
  },
  phoneNumber: {
    type: Number,
    unique: true,
    required: true,
  },
  BookedTrips: {
    type : Array,
    required: true,
    default: []
  }
});

// Create the BusDetails model
const User = mongoose.model('User', userSchema, "users");

export default User;
