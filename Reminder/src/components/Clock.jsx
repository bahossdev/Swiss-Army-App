// import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers';
// import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { useState } from 'react';


export default function Clock() {

    const [range, setRange] = useState([]);
    console.log(range);
    console.log("this one------: ",range.$d);
    // console.log(newValue);
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
                orientation="portrait"
                value={range}
                label="Controlled picker"
                onChange={(newValue) => setRange(newValue)}
            />
        </LocalizationProvider>
    );
}