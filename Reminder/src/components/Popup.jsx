import './popup.css/';
import { useState } from 'react';


export default function Popup(props) {
    const [interval, setInterval] = useState(1);
    const [intervalUnit, setIntervalUnit] = useState('minute');
    const [reminders, setReminders] = useState([]);
    // const [isEditing, setIsEditing] = useState(false);

    const handleTypedInterval = (event) => {
        const value = parseInt(event.target.value);
        if (!isNaN(value) && value >= 1) {
            setInterval(value);
        }
        // setIsEditing(true);
    }

    const incrementInterval = () => {
        // setIsEditing(false);
        setInterval(interval + 1);
    }

    const decrementInterval = () => {
        // setIsEditing(false);
        if (interval > 1) {
            setInterval(interval - 1)
        }
    }

    const addReminder = () => {
        const newReminder = {
            name: props.children,
            interval: interval,
            unit: intervalUnit
        }
        const activeReminders = JSON.parse(localStorage.getItem('Active Reminders')) || [];
        const updatedReminders = [...activeReminders, newReminder]
        setReminders(updatedReminders);
        localStorage.setItem('Active Reminders', JSON.stringify(updatedReminders));

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
                    <button onClick={() => addReminder()}>Add Reminder</button>
                </div>
            </div>
        </div>
    ) : "";
}
