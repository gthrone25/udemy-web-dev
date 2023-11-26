export default function ListPicker({ values }) {
    const randIdx = Math.floor(Math.random() * values.length);
    const randElement = values[randIdx];
    return (
        <div>
            <p>the list of values: {values} </p>
            <p>Random element is: {randElement}</p>
        </div>
    );
}