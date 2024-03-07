import Autocomplete, {createFilterOptions} from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useEffect, useState, useMemo } from "react";

export default function PlaceAutoComplete({setPlace}) {
  const [data, setData] = useState([]);
  const [isloading, setLoading] = useState(true);

  const filterOptions = createFilterOptions({
    matchFrom: 'start',
  });
  async function fetchPlaces() {
    try {
      const places = await fetch("http://localhost:3000/places/get-all-places");
      const placesArray = await places.json();
      setData(placesArray);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchPlaces();
  }, []);

  const placeOptions = useMemo(() => {
    return data;
  }, [data]);

  return (
    <Autocomplete
      id="place-autocomplete"
      size="small"
      options={placeOptions}
      filterOptions={filterOptions}
      loading={isloading}
      onInputChange={(e, value) => {setPlace(value)}}
      renderInput={(params) => (
        <TextField sx={{ width: "100%" }} {...params} variant="standard" />
      )}
    />
  );
}
