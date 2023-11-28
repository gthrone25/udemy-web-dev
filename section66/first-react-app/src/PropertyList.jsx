import Property from "./Property";
import "./PropertyList.css"

export default function PropertyList({ properties }) {
    return (
        <div className="PropertyList">
            {
                properties.map((i) => (
                    <Property
                        key={i.id}
                        name={i.name}
                        price={i.price}
                        rating={i.rating}
                    />
                ))
            }
        </div>
    )
}