

export default function TodayReminders() {
    const today = new Date();
    console.log(today);
    const activeReminders = JSON.parse(localStorage.getItem('Active Reminders')) || [];

    const upcomingReminders = activeReminders.filter(activeReminder => {
        const reminderDate = new Date(activeReminder.startTime);
        return reminderDate >= today;
    });

    const passedReminders = activeReminders.filter(activeReminder => {
        const reminderDate = new Date(activeReminder.startTime);
        return reminderDate < today;
    });


    return (
        <div>
            <h1 className="mb-4">Today Reminders</h1>
            <div>
                <h2>Upcoming Reminders</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {upcomingReminders.map((reminder, index) => (
                        <div key={index} className="card">
                            {reminder.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
