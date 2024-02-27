import { reminders } from '../seed';
import Reminder from '../components/Reminder';

export default function AllReminders() {
    return (
        <div>
            <h1 className="mb-4">All Reminders</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {reminders.map((reminder, index) => (
                    <div key={index} className="col">
                        <Reminder reminder={reminder} />
                    </div>
                ))}
            </div>
        </div>
    )
}