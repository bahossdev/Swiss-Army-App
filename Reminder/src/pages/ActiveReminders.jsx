import { reminders } from '../seed';

export default function ActiveReminders() {
    const activeReminders = JSON.parse(localStorage.getItem('Active Reminders')) || [];

    return (
        <div>
            <h1 className="mb-4">Active Reminder</h1>
            {activeReminders.map(activeReminder => {
                const reminder = reminders.find(r => r.name === activeReminder.name);
                if (!reminder) return null;
                return (

                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div key={reminder.name} className="card">

                            <img src={reminder.icon} alt={reminder.name} />
                            <h3>{reminder.name}</h3>
                            <p>Every {activeReminder.interval} {activeReminder.unit}(s)</p>
                        </div>
                    </div>
                )
            })}

        </div>
    );

};