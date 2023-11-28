import { useState } from "react"
import './ColorBox.css'

const rand = (arr) => Math.floor(Math.random() * arr.length);


export default function ColorBox({ colors }) {
    let randnum = rand(colors);
    let randcolor = colors[randnum];
    const [randcol, setRandCol] = useState(randcolor)
    const changeRandCol = () => {
        let col = colors[rand(colors)]
        setRandCol(col)
    }

    return (
        <div
            className="ColorBox"
            style={{
                backgroundColor: randcolor,
            }}
            onClick={changeRandCol}>
        </div >
    )
}