function Card({
  name = "Placeholder",
  description = "This is a placeholder card.",
  imageUrl = "https://placehold.co/150",
}) {
  return (
    <div className="card">
      <img alt="Team member picture" src={imageUrl}></img>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
