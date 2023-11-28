import { useState } from "react";

export default function ScoreKeeperBig({ numPlayers = 4, target = 3 }) {
    const [scores, setScores] = useState(Array(numPlayers).fill(0))
    function increaseScore(playernum) {
        const newScores = scores.map((s, i) => {
            if (i === playernum) {
                return s + 1;
            } else {
                return s;
            }
        })
        setScores(newScores)
    }
    function resetScores() {
        const newScores = Array(numPlayers).fill(0)
        setScores(newScores)

    }
    return (
        <ul>
            {scores.map((s, i) => (
                < li key={i} >
                    Player {i}: {s}
                    <button onClick={() => {
                        increaseScore(i)
                    }}>+1</button>
                    {s >= target && "Winner!"}
                </li>
            ))}
            <li>
                <button onClick={resetScores}>Reset</button>
            </li>
        </ul >
    )
}