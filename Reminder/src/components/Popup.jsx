import './popup.css/';

export default function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}
                >close</button>
                {/* {props.children} */}
                Morgan
            </div>
        </div>
    ) : "";
}
