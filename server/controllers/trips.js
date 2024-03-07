import Trips from "../models/trip.js";

// get all trips
async function getTrips(req, res) {
  try {
    const trips = await Trips.find();
    res.json({
      success:true,
      trips
    });
  } catch (err) {
    res.status(500).json(error.message);
  }
}

//get trips by date
async function getTripsByDate(req, res) {
  const { date } = req.body;
  // Validate the date format
  if (!date) {
    return res.status(400).json({ error: "Date is required." });
  }

  let startTime, endTime;

  // Check if the date is in ISO format
  if (date.includes("T")) {
    startTime = new Date(date).toISOString();
    endTime = new Date(`${date}T23:59:59.999Z`).toISOString();
  } else {
    // Convert double format to milliseconds
    const milliseconds = parseFloat(date);
    if (isNaN(milliseconds)) {
      return res.status(400).json({ error: "Invalid date format." });
    }

    // Create a Date object using milliseconds
    const dateObj = new Date(milliseconds);

    // Set start and end time for the day
    startTime = dateObj.toISOString();
    endTime = new Date(dateObj.getTime() + (24 * 60 * 60 * 1000) - 1).toISOString();
  }
  // Calculate the start and end dates for the query
  try {
    const allTripsByDate = await Trips.find({
      date: {
        $gte: startTime,
        $lte: endTime,
      },
    });

    res.status(200).json(allTripsByDate);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

// filter trips such as rating, time etc.,
async function filterTrips(req, res) {
  const { from, to, startTime, endTime, busName } = req.query;
  const query = {};

  const filterableParams = ["from", "to", "startTime", "endTime", "busName"];

  for (const param of filterableParams) {
    if (req.query[param]) {
      query[param] = req.query[param];
    }
  }
  // if(query[startTime]){
  //   query[startTime] = new Date(query[startTime])
  //   console.log(query[startTime])
  // }
  const dateString = query["startTime"]
  
  // query["startTime"] = new Date("2023-01-17T18:30:00.000+00:00");
  // console.log("2023-01-17T18:30:00.000+00:00");
  // console.log(query[startTime])
  try {
    const filteredTrips = await Trips.find(query);
    res.json({
      success:true,
      filteredTrips
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
}

async function addTrip(req, res) {
  // const newTripData = req.body;
  const { date, startTime, endTime, ...tripData } = req.body;
  try {
    // const dataInserted = new Trips(newTripData);
    const dataInserted = new Trips({
      date: new Date(date),
      startTime: new Date(startTime),
      endTime: new Date(endTime),
      ...tripData, // Using spread operator to include remaining fields
    });
    await dataInserted.save();
    res.status(200).json({ 
      success:true,
      message:"trip created successfully",
      data: dataInserted 
    });
  } catch (err) {
    // console.log(err)
    res.status(500).json({
      success:false,
      message:err.message
    });
  }
}

export { getTrips, addTrip, getTripsByDate, filterTrips };
