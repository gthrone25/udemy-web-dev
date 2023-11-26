export default function Property({ name, rating, price }) {
    const priced = `$${price} a night`;
    const ratingd = `${rating}⭐️`;
    return (
        <div>
            <h2>{name}</h2>
            <h3>{priced}</h3>
            <h4>{ratingd}</h4>
        </div>
    );
}