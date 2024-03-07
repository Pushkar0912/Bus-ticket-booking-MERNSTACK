import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
export default function MuiDayPicker({date, setDate}) {
  const dateStyles = {
    padding: '5px 10px',
    border: 'none !important',
    outline:' none !important',
}


  const today = new Date();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        sx={dateStyles}
        className="date-picker"
        defaultValue={date}
        views={["month", "day", "year"]}
        onChange={(newDate) => setDate(newDate)}
        slotProps={{ textField: { variant: "standard" } }}
        disablePast={true}
        
      />
    </LocalizationProvider>
  );
}
