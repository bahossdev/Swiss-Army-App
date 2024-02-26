import { reminders } from '../seed';
import Reminder from '../components/Reminder';

export default function AllReminders() {
    return (
        <div>
            <h1>All Reminders</h1>
            <div>
                {reminders.map((reminder, index) => (
                    <Reminder key={index} reminder={reminder} />
                ))}
            </div>
        </div>
    )
}