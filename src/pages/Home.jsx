import "../styles/pages/Home.css";
import { slides } from "../data/carouselData.json";
import Carousel from "../components/Carousel";
import MovieCard from "../components/MovieCard";

function Home() {
  return (
    <main className="home-page">
      <div className="home-container">
        <section className="section-carousel">
          <h2 className="section-title">Destaques</h2>
          <div className="carousel">
            <Carousel data={slides} />
          </div>
        </section>

        <section className="search-section">
          <h2 className="section-title">Buscar filmes</h2>
          <input
            className="search-input"
            type="text"
            placeholder="Pesquisar pelo nome do filme"
            aria-label="Pesquisar filmes"
          />
        </section>

        <MovieCard data={slides} />
      </div>
    </main>
  );
}

export default Home;
