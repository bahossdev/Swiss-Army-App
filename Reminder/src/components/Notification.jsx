import './popup.css/';
// import { useState } from 'react';

export default function Notification(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button
                    className="close-btn"
                    onClick={() => props.setTrigger(false)}>X</button>
            </div>
        </div>
    ) : "";
}