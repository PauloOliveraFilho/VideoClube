import { useParams } from "react-router-dom";

import "../styles/pages/Filme.css";
import moviesData from "../data/moviesData.json";
import formatCurrency from "../utils/money";
function Filme() {
  const { id } = useParams();

  const movie = moviesData[id];

  return (
    <main className="movie-detail-page">
      <section className="movie-detail-section">
        <div className="movie-detail-card">
          <h3 className="movie-detail-title">{movie.title}</h3>
          <img src={movie.src} alt={movie.alt}></img>
          <figcaption>Poster do {movie.title}</figcaption>
          <div>
            <p className="movie-detail-desc">{movie.description}</p>
          </div>
          <p className="movie-detail-rating">Nota: {movie.rating.toFixed(2)}</p>
          <p className="movie-detail-price">
            Preço: {formatCurrency(movie.price)}
          </p>
        </div>
      </section>
    </main>
  );
}

export default Filme;
