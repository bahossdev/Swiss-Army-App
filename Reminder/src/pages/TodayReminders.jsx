import dayjs from 'dayjs';

export default function TodayReminders() {
    const today = new Date();
    const setTomorrow = () => {
        const d = new Date();
        const UTCtomorrow = dayjs(d).add(1, 'day');
        const tomorrow = UTCtomorrow.format('YYYY-MM-DD HH:mm:ss [UTC]');
        return tomorrow;
    }

    const nextDay = setTomorrow();
    console.log('nextDay', setTomorrow());
    // console.log('current', today.getDate());
    // console.log(today);
    const activeReminders = JSON.parse(localStorage.getItem('Active Reminders')) || [];

    const upcomingReminders = activeReminders.filter(activeReminder => {
        const reminderDate = new Date(activeReminder.startTime);
        console.log('reminder', reminderDate.getDate());
        console.log( 'comparison', nextDay > reminderDate)
        return  reminderDate >= today;
    });

    // const passedReminders = activeReminders.filter(activeReminder => {
    //     const reminderDate = new Date(activeReminder.startTime);
    //     console.log('line 16', reminderDate);
    //     return reminderDate < today;
    // });


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
                {/* <div className="row row-cols-1 row-cols-md-3 g-4">
                    {passedReminders.map((reminder, index) => {
                        { console.log('passedreminder: ', reminder) }
                        <div key={index} className="card">
                            {reminder.name}
                        </div>

                    })}
                </div> */}
            </div>
        </div>
    );
}
