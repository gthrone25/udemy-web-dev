export default function Clicker2({ message, buttonText }) {
    function handleClick(evt) {
        alert(message)
    }

    return (
        <div>
            <button onClick={handleClick}>{buttonText}</button>
        </div>
    )
}