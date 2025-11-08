import { useState } from "react";
import "../styles/components/MovieCard.css";
import { Link } from "react-router-dom";
import moviesData from "../data/moviesData.json";

function MovieCard() {
  const [movies, setMovies] = useState(moviesData);

  function formatCurrency(amount) {
    return amount.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <section className="catalog-section">
      <h2 className="section-title">Catálogo</h2>
      <div className="movies-grid">
        {movies.map((movie, idx) => {
          return (
            <Link to={`/filme/${idx}`} key={idx} className="movie-link">
              <article key={idx} className="movie-card">
                <h3 className="movie-title">{movie.title + " " + (idx + 1)}</h3>
                <figure>
                  <div className="movie-poster">
                    {movie.src + " " + (idx + 1)}
                  </div>
                  <figcaption>{movie.caption + " " + (idx + 1)}</figcaption>
                </figure>
                <p className="movie-desc">
                  {movie.description + " " + (idx + 1)}
                </p>
                <p className="movie-rating">Nota: {movie.rating}</p>
                <p className="movie-price">
                  Preço: {formatCurrency(movie.price)}
                </p>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default MovieCard;
