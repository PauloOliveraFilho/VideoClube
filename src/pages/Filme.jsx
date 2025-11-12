import { Link, useParams, useNavigate } from "react-router-dom";

import "../styles/pages/Filme.css";
import moviesData from "../data/moviesData.json";

import formatCurrency from "../utils/money";
function Filme() {
  const { id } = useParams();
  const navigate = useNavigate();

  const getMovieByParam = (param) => {
    if (param == null) return undefined;
    const decoded = decodeURIComponent(param);

    if (/^\d+$/.test(decoded)) {
      const idx = Number(decoded);
      return moviesData[idx];
    }

    const lower = decoded.toLowerCase();
    return moviesData.find(
      (m) =>
        (m.title && m.title.toLowerCase() === lower) ||
        (m.slug && m.slug.toLowerCase() === lower)
    );
  };

  const movie = getMovieByParam(id);

  if (!movie) {
    return (
      <main className="movie-detail-page">
        <section className="movie-detail-section">
          <h3 className="movie-detail-title">Filme não encontrado</h3>
          <div className="movie-detail-actions">
            <button
              title="Voltar"
              onClick={() => navigate(-1)}
              className="movie-detail-btn"
            >
              Voltar
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="movie-detail-page">
      <section className="movie-detail-section">
        <h3 className="movie-detail-title">{movie.title}</h3>

        <div className="movie-detail-content">
          <div className="movie-detail-card">
            <div className="movie-detail-poster">
              <img src={movie.src} alt={movie.alt}></img>
              <figcaption>Poster do {movie.title}</figcaption>

              <p className="movie-detail-rating">
                Nota: {movie.rating.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="movie-detail-desc">
            <p>{movie.description}</p>
          </div>

          <aside className="movie-detail-extra">
            <h4 className="section-title">Informações</h4>
            <ul>
              <li className="movie-detail-price">
                Preço: {formatCurrency(movie.price)}
              </li>
              <li>Gênero: {movie.caption}</li>
              <li>Ano: {movie.year}</li>
            </ul>
          </aside>
        </div>
        <div className="movie-detail-actions">
          <Link to={`/Comprar Ingresso/${id}`} className="movie-detail-btn">
            Comprar Ingressos
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Filme;
