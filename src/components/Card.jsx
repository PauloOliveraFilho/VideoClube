import "../styles/components/Card.css";

function Card({
  name = "Placeholder",
  description = "This is a placeholder card.",
  alt = "Placeholder image",
  imageUrl = "https://placehold.co/150",
}) {
  return (
    <div className="card">
      <img
        className="card-image"
        alt={alt}
        src={imageUrl}
      ></img>
      <h3 className="card-title">{name}</h3>
      <p className="card-text">{description}</p>
    </div>
  );
}

export default Card;
