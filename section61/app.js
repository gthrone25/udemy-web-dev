import "./styles.css";
import Greeter from "./Greeter.js";
import { Dog } from "./Dog";
import LoginForm from "./LoginForm";
import DieRoll from "./DieRoll";
import RandomPokemon from "./RandomPokemon";

export default function App() {
    return (
        <div className="App">
            <Greeter />
            <LoginForm />
            <Dog />
            <Dog />
            <Dog />
            <Greeter />
            <DieRoll />
            <RandomPokemon />
        </div>
    );
}
