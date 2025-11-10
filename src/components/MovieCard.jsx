import React, { useState } from "react";
import "../styles/components/MovieCard.css";
import { Link } from "react-router-dom";
import moviesData from "../data/moviesData.json";
import formatPrice from "../utils/money.js";

function MovieCard({ searchQuery = "" }) {
  const [movies] = useState(moviesData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes((searchQuery || "").toLowerCase())
  );

  const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedMovies = filteredMovies.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Resetar para página 1 quando a busca muda
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <section className="catalog-section">
      <h2 className="section-title">Catálogo</h2>
      <div className="movies-grid">
        {paginatedMovies.length > 0 ? (
          paginatedMovies.map((movie, idx) => {
            return (
              <Link to={`/filme/${idx}`} key={idx} className="movie-link">
                <article className="movie-card">
                  <h3 className="movie-title">{movie.title}</h3>
                  <figure>
                    <div className="movie-poster">{movie.src}</div>
                    <figcaption>{movie.caption}</figcaption>
                  </figure>
                  <p className="movie-desc">{movie.description}</p>
                  <p className="movie-rating">Nota: {movie.rating}</p>
                  <p className="movie-price">
                    Preço: {formatPrice(movie.price)}
                  </p>
                </article>
              </Link>
            );
          })
        ) : (
          <p className="no-results">Nenhum filme encontrado</p>
        )}
      </div>

      {filteredMovies.length > 0 && totalPages > 1 && (
        <div className="pagination">
          <button
            className="pagination-btn"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            ← Anterior
          </button>

          <div className="pagination-numbers">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  className={`pagination-number ${
                    currentPage === pageNumber ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              )
            )}
          </div>

          <button
            className="pagination-btn"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Próxima →
          </button>
        </div>
      )}
    </section>
  );
}

export default MovieCard;
