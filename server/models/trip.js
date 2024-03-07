import mongoose from 'mongoose';

// Define the Trips schema
const tripsSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  busOwnerID: {
    type: Number,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  EndTime: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
  },
  SeatBooked: [{
    type: String,
  }],
  bus_no: {
    type: Number,
  },
  amenities_list: [{
    type: String,
  }],
  busFare: {
    type: Number,
    required: true,
  },
  busName: {
    type: String,
    required: true,
  },
});

// Create the Trips model
const Trips = mongoose.model('Trips', tripsSchema, 'trips');

export default Trips;
