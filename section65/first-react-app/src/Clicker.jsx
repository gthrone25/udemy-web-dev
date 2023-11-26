function handleClick() {
    console.log("Clicked the button")
}

function handleHover() {
    console.log("Hovered")
}

export default function Clicker() {
    return (
        <div>
            <p onMouseOver={handleHover}>Hover over me</p>
            <button onClick={handleClick}>Button</button>
        </div>
    )
}