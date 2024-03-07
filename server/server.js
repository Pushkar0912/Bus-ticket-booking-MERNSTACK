import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors'
// import routes
import tripRoutes from './routes/trips.js'
import bookingRoutes from './routes/booking.js'
import placeRoutes from './routes/places.js'

// import Trips from './models/trip.js'
// import stateDistrict from "./models/stateDistrict.js";
// import BusDetails from "./models/bus.js";
// import { trips } from "./data/trips.js";
// import { states } from "./data/states.js";
// import { buses } from "./data/buses.js";

dotenv.config();
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

const port = 3000;

app.use('/trips', tripRoutes)
app.use('/booking', bookingRoutes)
app.use('/places', placeRoutes)


// connect to MongoDB 
mongoose
  .connect(process.env.MONGO_URI)
  const db = mongoose.connection
  db.on('error', (err) => console.log(err))
  db.once('open', () => console.log('Database created...'))
  
//  const refreshAll = async () => {
//     await Trips.insertMany(trips)
//     await stateDistrict.insertMany(states)
//     await BusDetails.insertMany(buses)
//     await mongoose.disconnect();
//   }
//   refreshAll()

  app.listen(port, () => {
    console.log(`server is listening in ${port}`);
  });