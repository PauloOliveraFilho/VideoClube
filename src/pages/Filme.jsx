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
        <h3 className="movie-detail-title">{movie.title}</h3>
          
        <div className="movie-detail-content">
          
          <div className="movie-detail-card">
          
            <div className="movie-detail-poster">
          
              <img src={movie.src} alt={movie.alt}></img>
              <figcaption>Poster do {movie.title}</figcaption>
          
              <p className="movie-detail-rating">Nota: {movie.rating.toFixed(2)}</p>
              <p className="movie-detail-price">
                Preço: {formatCurrency(movie.price)}
              </p>
          
            </div>
          
          </div>
        
          <div className="movie-detail-desc">
              <p>{movie.description}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Filme;
