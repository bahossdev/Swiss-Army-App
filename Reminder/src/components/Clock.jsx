// import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { useState } from 'react';


export default function Clock(props) {

    const [time, setTime] = useState([]);
    // console.log(time);
    // console.log("this one------: ", time.$d);
    // console.log(newValue);

    const handleTimeChange = (newValue) => {
        setTime(newValue);
        props.onTimeChange(newValue);
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDateTimePicker
                orientation="landscape"
                value={time}
                label="Controlled picker"
                onChange={handleTimeChange} />
        </LocalizationProvider>
    );
}