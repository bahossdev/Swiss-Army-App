import { useState } from 'react';
import Popup from './Popup'

export default function Reminder({ reminder }) {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <>
            <a href={`/all`} >
                <img src={reminder.icon} alt={reminder.name} />
                <h3>{reminder.name}</h3>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>Add Reminder*</Popup>
            </a>
            <button onClick={() => setButtonPopup (true) }>Add Reminder</button>
        </>
    )
}