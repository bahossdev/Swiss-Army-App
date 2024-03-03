import './popup.css/';
import { useState } from 'react';
import dayjs from 'dayjs';
import Clock from './Clock'


export default function Popup(props) {
    const [interval, setInterval] = useState(1);
    const [intervalUnit, setIntervalUnit] = useState('minute');
    const [reminders, setReminders] = useState([]);
    const [newRange, setRange] = useState([]);


    const handleTypedInterval = (event) => {
        const value = parseInt(event.target.value);
        if (!isNaN(value) && value >= 1) {
            setInterval(value);
        }
    }

    const incrementInterval = () => {
        setInterval(interval + 1);
    }

    const decrementInterval = () => {
        if (interval > 1) {
            setInterval(interval - 1)
        }
    }

    const addReminder = () => {
        // console.log(range);
        // console.log(newValue);
        // console.log(unit);
        // console.log(newRange);
        const newReminder = {
            name: props.children,
            interval: interval,
            unit: intervalUnit,
            // endTime: endTime
            // range: [...range, newRange]
        }
        const activeReminders = JSON.parse(localStorage.getItem('Active Reminders')) || [];
        const updatedReminders = [...activeReminders, newReminder]
        setReminders(updatedReminders);
        localStorage.setItem('Active Reminders', JSON.stringify(updatedReminders));

        // while (dayjs.hour() < newReminder.endTime) {

        // }
        // const currentTime = dayjs();
        // const reminderTimes = [

        // ]

        //clear the input
        setInterval(1);
        setIntervalUnit('minute');
        props.setTrigger(false);
    }

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button
                    className="close-btn"
                    onClick={() => props.setTrigger(false)}>X</button>
                <div>
                    <h4>Add {props.children} Reminder</h4>
                    <label htmlFor="frequency"> Every</label>
                    <button onClick={() => decrementInterval()}>-</button>
                    <input
                        // type="number"
                        value={interval}
                        onChange={handleTypedInterval}
                        min="1"
                    />
                    <button onClick={() => incrementInterval()}>+</button>
                    <label htmlFor="unit">Unit:</label>
                    <select
                        id="unit"
                        value={intervalUnit}
                        onChange={(event) => setIntervalUnit(event.target.value)}>
                        <option value="minute">Minute(s)</option>
                        <option value="hour">Hour(s)</option>
                        <option value="day">Day(s)</option>
                        <option value="week">Week(s)</option>
                        <option value="month">Month(s)</option>
                    </select>
                    {/* <input
                        id="endTime"
                        value={endTime}
                        type='time'
                        onChange={(event) => setEndTime(event.target.value)}>
                    </input> */}
                    <Clock
                        // value={newRange}
                        // label="Controlled picker"
                        // onChange={(newValue) => setRange(newValue)}
                    />

                    <button onClick={() => addReminder()}>Add {props.children} Reminder</button>
                </div>
            </div>
        </div>
    ) : "";
}
