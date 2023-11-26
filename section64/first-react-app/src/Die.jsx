

export default function Die({ numSides = 6 }) {
    const roll = Math.floor(Math.random() * numSides) + 1;
    return <h2 className="Die">Die Roll: {roll}</h2>;
}
