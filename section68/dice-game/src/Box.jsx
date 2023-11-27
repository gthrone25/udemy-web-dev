import "./Box.css"
import { useState } from 'react'

function Box({ isActive, toggle }) {
    return (
        <div
            className="Box"
            onClick={toggle}
            style={{ backgroundColor: isActive ? "red" : "black" }}>

        </div>
    )
}

export default Box;