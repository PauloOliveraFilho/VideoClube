import { useState } from "react";
import "../styles/components/MovieCard.css";
import { Link } from "react-router-dom";
import moviesData from "../data/moviesData.json";
import formatPrice from "../utils/money.js";

function MovieCard() {
  const [movies, setMovies] = useState(moviesData);

  return (
    <section className="catalog-section">
      <h2 className="section-title">Catálogo</h2>
      <div className="movies-grid">
        {movies.map((movie, idx) => {
          return (
            <Link to={`/filme/${idx}`} key={idx} className="movie-link">
              <article key={idx} className="movie-card">
                <h3 className="movie-title">{movie.title}</h3>
                <figure>
                  <div className="movie-poster">{movie.src}</div>
                  <figcaption>{movie.caption}</figcaption>
                </figure>
                <p className="movie-desc">{movie.description}</p>
                <p className="movie-rating">Nota: {movie.rating}</p>
                <p className="movie-price">Preço: {formatPrice(movie.price)}</p>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default MovieCard;
