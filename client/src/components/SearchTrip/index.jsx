import PlaceAutoComplete from "../PlaceAutoComplete";
import { CalendarMonthOutlined } from "@mui/icons-material";
import getOffBus from "../../assets/get-of-bus.png";
import getOnBus from "../../assets/get-on-bus.png";
import "./search_trip.css";
import DayPicker from "../DayPicker";

const SearchTripForm = ({ date, setDate, setTo, setFrom }) => {
  return (
    <div className="search-parameters">
      <div className="search-input from">
        <div className="search-heading">
          <img src={getOnBus} className="imgIcon" />
          <p className="input-heading">From</p>
        </div>
        <PlaceAutoComplete setPlace={setFrom} />
      </div>
      <div className="search-input to">
        <div className="search-heading">
          <img src={getOffBus} className="imgIcon" />
          <p className="input-heading">To</p>
        </div>
        <PlaceAutoComplete setPlace={setTo} />
      </div>
      <div className="search-input date">
        <div className="search-heading">
          <CalendarMonthOutlined className="icon" />
          <p className="input-heading">Travel Date</p>
        </div>
        <DayPicker date={date} setDate={setDate} />
      </div>
    </div>
  );
};

export default SearchTripForm;
