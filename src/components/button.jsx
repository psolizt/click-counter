import '../css/button.css'

function Button({text, isClickButton, eventClick }) {
    return (
        <button className={isClickButton?'button-click':'button-reset'} onClick={eventClick}>{text}</button>
    );
}

export default Button;