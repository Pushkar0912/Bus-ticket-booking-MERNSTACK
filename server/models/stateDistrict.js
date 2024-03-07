import mongoose from "mongoose";

// Define the StateDistrict schema
const stateDistrictSchema = new mongoose.Schema({
  state: {
    type: String,
    required: true,
  },
  districts: {
    type: Array,
    required: true,
  },
});

export const stateDistrict = mongoose.model(
  "StateDistrict",
  stateDistrictSchema,
  "state_district"
);

export default stateDistrict;
