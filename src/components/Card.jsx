function Card({
  name = "Placeholder",
  description = "This is a placeholder card.",
  imageUrl = "https://placehold.co/150",
}) {
  return (
    <div className="card">
      <img
        className="card-image"
        alt="Team member picture"
        src={imageUrl}
      ></img>
      <h3 className="card-title">{name}</h3>
      <p className="card-text">{description}</p>
    </div>
  );
}

export default Card;
