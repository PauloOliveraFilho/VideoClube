import { useState } from "react";
import "../styles/components/MovieCard.css";

function MovieCard() {
  const [movies, setMovies] = useState([
    {
      title: "Titulo do Filme",
      img: "Imagem",
      caption: "Poster do filme",
      description: "Descrição do filme",
      rating: "1.0",
    },
    {
      title: "Titulo do Filme",
      img: "Imagem",
      caption: "Poster do filme",
      description: "Descrição do filme",
      rating: "2.0",
    },
    {
      title: "Titulo do Filme",
      img: "Imagem",
      caption: "Poster do filme",
      description: "Descrição do filme",
      rating: "3.0",
    },
  ]);

  return (
    <section className="catalog-section">
      <h2 className="section-title">Catálogo</h2>
      <div className="movies-grid">
        {movies.map((movie, idx) => {
          return (
            <article key={idx} className="movie-card">
              <h3 className="movie-title">{movie.title + " " + (idx + 1)}</h3>
              <figure>
                <div className="movie-poster">
                  {movie.img + " " + (idx + 1)}
                </div>
                <figcaption>{movie.caption + " " + (idx + 1)}</figcaption>
              </figure>
              <p className="movie-desc">
                {movie.description + " " + (idx + 1)}
              </p>
              <p className="movie-rating">Nota: {movie.rating}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default MovieCard;
