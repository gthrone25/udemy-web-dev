import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { sum } from './utils'

import LuckyN from "./LuckyN"
import BoxGrid from "./BoxGrid"

function lessThan4(dice) {
  return sum(dice) < 4;
}

function allSameValue(dice) {
  return dice.every((v) => v === dice[0]);
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BoxGrid />
      {/* <LuckyN numDice={2} winCheck={allSameValue} title={"allSameValue"} /> */}
      {/* <LuckyN numDice={2} winCheck={lessThan4} title={"lessThan4"} /> */}
      {/* <LuckyN numDice={3} goal={11} /> */}
      {/* <Dice dice={[3, 6, 1]} color="olivegreen" /> */}
    </>
  )
}

export default App
