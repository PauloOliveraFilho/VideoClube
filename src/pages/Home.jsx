import "../styles/pages/Home.css";
import { slides } from "../data/carouselData.json";
import Carousel from "../components/Carousel";
import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearchChange(e) {
    setSearchQuery(e.target.value);
  }
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
            value={searchQuery}
            onChange={(e) => {
              handleSearchChange(e);
            }}
          />
        </section>

        <MovieCard searchQuery={searchQuery} />
      </div>
    </main>
  );
}

export default Home;
