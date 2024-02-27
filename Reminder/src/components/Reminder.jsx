import { useState } from 'react';
import Popup from './Popup'

export default function Reminder({ reminder }) {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className="card">
            <a onClick={() => setButtonPopup(true)}>
                <h3>{reminder.name}</h3>
                <img src={reminder.icon} className="card-img-top reminder-card" alt={reminder.name} />
            </a>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    {reminder.name}
                </Popup>
        </div>
    )
}