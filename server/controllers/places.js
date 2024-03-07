import stateDistrict from "../models/stateDistrict.js";

// Controller function to get all places in the format 'districtName, StateName'
export async function getPlaces (req, res){
  try {
    // Fetch all documents from the StateDistrict collection
    const places = await stateDistrict.find();

    // Create an array to store the formatted places
    const formattedPlaces = places.map((place) => {
      const { state, districts } = place;

      // Iterate through the districts and create the formatted strings
      const formattedDistricts = districts.map((district) => `${district}, ${state}`);

      return formattedDistricts;
    });

    // Flatten the array to get a single list of formatted places
    const allFormattedPlaces = formattedPlaces.flat();

    res.status(200).json(allFormattedPlaces);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


