import './App.css'
import Chicken from "./Chicken";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Heading from "./Heading";
import ColorList from "./ColorList";
import Slots from "./Slots";

function App() {
  return (
    <div>
      <Heading color="magenta" text="Welcome!" fontSize="20px" />
      <Heading color="teal" text="blah" fontSize="48px" />

      <Slots val1="🍒" val2="🍒" val3="🍒" />

      < DoubleDice />
      < DoubleDice />
      < DoubleDice />

      <ColorList colors={["red", "pink", "purple", "teal"]} />
      <ColorList colors={["olive", "orangered", "slategrey"]} />
      <ListPicker values={[1, 2, 3]} />
      <ListPicker values={["a", "b", "c"]} />
      <Greeter person="Bill" from="Greg" />
      <Greeter person="Ted" from="Annie" />
      <Greeter person="Rosa" from="Greg" />
      <Greeter />
      <Die numSides={20} />
      <Die numSides={10} />
      <Die />
    </div>
  )
}

export default App
