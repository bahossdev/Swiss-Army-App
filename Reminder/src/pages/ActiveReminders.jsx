import { reminders } from '../seed';
import dayjs from 'dayjs';

export default function ActiveReminders() {
    const activeReminders = JSON.parse(localStorage.getItem('Active Reminders')) || [];

    return (
        <div>
            <h1 className="mb-4">Active Reminder</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {activeReminders.map((activeReminder, index) => {
                    const reminder = reminders.find(r => r.name === activeReminder.name);
                    if (!reminder) return null;
                    const startTime = dayjs(activeReminder.startTime).format("ddd MMM DD YYYY HH:mm");
                    const endTime = dayjs(activeReminder.endTime).format("ddd MMM DD YYYY HH:mm");
                    return (
                        <div key={index} className="card card-active">
                            <img src={reminder.icon} alt={reminder.name} />
                            <h3>{reminder.name}</h3>
                            <p><span className="fw-bold">Remind me: </span>Every {activeReminder.interval} {activeReminder.unit}(s)</p>
                            <p><span className="fw-bold">Starting on: </span>{startTime}</p>
                            <p><span className="fw-bold">Ending on: </span>{endTime}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );

};