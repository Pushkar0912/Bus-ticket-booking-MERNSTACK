import mongoose from 'mongoose';

// Define the BusDetails schema
const busDetailsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  totalSeats: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  amenities: [{
    type: String,
  }],
});

// Create the BusDetails model
const BusDetails = mongoose.model('BusDetails', busDetailsSchema, "bus_details");

export default BusDetails;
