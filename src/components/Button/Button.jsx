import "../../index.css"


export default function Button({ buttonName, handleButtonClick, type, disabled, className }) {
    return (
        <button
            className={className}
            onClick={handleButtonClick}
            type={type}
            disabled={disabled}>{buttonName}
        </button>
    );
}