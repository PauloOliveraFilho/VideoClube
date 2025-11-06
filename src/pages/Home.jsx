import Header from "../componentes/Header";
import "../styles/Home.css";

function Home() {
  return (
    <main className="home-page">
      {/* Espaço reservado para Header */}
      <div className="header-spacer">
        <Header />
      </div>

      <div className="home-container">
        {/* Campo de busca */}
        <section className="search-section">
          <h2 className="section-title">Buscar filmes</h2>
          <input
            className="search-input"
            type="text"
            placeholder="Pesquisar pelo nome do filme"
            aria-label="Pesquisar filmes"
          />
        </section>

        {/* Carrossel de imagens */}
        <section>
          <h2 className="section-title">Destaques</h2>
          <div className="carousel">
            {/* Área de carrossel (somente estrutura) */}
            <ul className="carousel-list">
              <li className="carousel-item">Imagem do carrossel 1</li>
              <li className="carousel-item">Imagem do carrossel 2</li>
              <li className="carousel-item">Imagem do carrossel 3</li>
            </ul>
          </div>
        </section>

        {/* Catálogo de filmes */}
        <section className="catalog-section">
          <h2 className="section-title">Catálogo</h2>

          <div className="movies-grid">
            <article className="movie-card">
              <h3 className="movie-title">Título do Filme 1</h3>
              <figure>
                <div className="movie-poster">Imagem do filme 1</div>
                <figcaption>Poster do filme 1</figcaption>
              </figure>
              <p className="movie-desc">Descrição breve do filme 1.</p>
              <p className="movie-rating">Nota: 8.5</p>
            </article>

            <article className="movie-card">
              <h3 className="movie-title">Título do Filme 2</h3>
              <figure>
                <div className="movie-poster">Imagem do filme 2</div>
                <figcaption>Poster do filme 2</figcaption>
              </figure>
              <p className="movie-desc">Descrição breve do filme 2.</p>
              <p className="movie-rating">Nota: 7.9</p>
            </article>

            <article className="movie-card">
              <h3 className="movie-title">Título do Filme 3</h3>
              <figure>
                <div className="movie-poster">Imagem do filme 3</div>
                <figcaption>Poster do filme 3</figcaption>
              </figure>
              <p className="movie-desc">Descrição breve do filme 3.</p>
              <p className="movie-rating">Nota: 9.1</p>
            </article>
          </div>
        </section>
      </div>

      {/* Espaço reservado para Footer */}
      <div className="footer-spacer" />
    </main>
  );
}

export default Home;
