import mongoose from "mongoose";

// Define the BusDetails schema
const bookedSchema = new mongoose.Schema({
  passengerName: {
    type: String,
    required: true,
  },
  bus_no: {
    type: Number,
    required: true,
  },
  seatNo: {
    type: Array,
    required: true,
  },
  date: {
    type: Number,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  startTime: {
    type: Number,
    required: true,
  },
  EndTime: {
    type: Number,
    required: true,
  },
  busFare: {
    type: Number,
    required: true,
  },
  busName: {
    type: String,
    required: true,
  },
});

// Create the BusDetails model
const Book = mongoose.model("Book", bookedSchema, "booking");

export default Book;
