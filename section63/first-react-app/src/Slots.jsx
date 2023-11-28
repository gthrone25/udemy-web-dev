export default function Slots({ val1, val2, val3 }) {
    const isWinner = val1 === val2 && val2 === val3;
    return (
        <div>
            <h1>
                {val1} {val2} {val3}
            </h1>
            <h2 style={{ color: isWinner ? "green" : "red" }}>
                {isWinner ? "You Win!" : "You Lost!"}
            </h2>
            {isWinner && <h3 style={{ color: "green" }}>Congrats</h3>}

        </div>
    )
}