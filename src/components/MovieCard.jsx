import React, { useState, useEffect } from "react";
import "../styles/components/MovieCard.css";
import { Link } from "react-router-dom";
import formatPrice from "../utils/money.js";

function getItemsPerPage() {
  if (typeof window === "undefined") return 9;
  const w = window.innerWidth;
  if (w < 640) return 2;
  if (w < 1024) return 6;
  return 9;
}

function MovieCard({ searchQuery = "", movies: moviesProp = null }) {
  const [moviesState, setMoviesState] = useState(moviesProp);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  useEffect(() => {
    function handleResize() {
      const newCount = getItemsPerPage();
      setItemsPerPage(newCount);
    }
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setMoviesState(moviesProp ?? moviesDataFallback);
    setCurrentPage(1);
  }, [moviesProp]);

  const filteredMovies = (moviesState ?? []).filter((movie) =>
    (movie.title || "").toLowerCase().includes((searchQuery || "").toLowerCase())
  );

  const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedMovies = filteredMovies.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((p) => p + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((p) => p - 1);
  };

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, itemsPerPage]);

  return (
    <section className="catalog-section">
      <h2 className="section-title">Catálogo</h2>
      <div className="movies-grid">
        {paginatedMovies.length > 0 ? (
          paginatedMovies.map((movie, idx) => {
            const globalIndex = startIndex + idx;
            return (
              <Link
                to={`/Detalhes do Filme/${globalIndex}`}
                key={globalIndex}
                className="movie-link"
              >
                <article className="movie-card">
                  <h3 className="movie-title">{movie.title}</h3>
                  <figure>
                    <img src={movie.src} alt={movie.alt} className="movie-poster"></img>
                    <figcaption>{movie.caption}</figcaption>
                  </figure>
                  <p className="movie-desc">{movie.short_description}</p>
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