import "../styles/pages/Home.css";
import localMovies from "../data/moviesData.json";
import localCarousel from "../data/carouselData.json";
import Carousel from "../components/Carousel";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { supabase } from "../data/supabaseClient";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const localSlides = Array.isArray(localCarousel)
    ? localCarousel
    : localCarousel.slides ?? [];
  const [slides, setSlides] = useState(localSlides);
  const [movies, setMovies] = useState(localMovies ?? []);

  // ...existing code...
  useEffect(() => {
    const load = async () => {
      try {
        const { data: slidesData, error: slidesError } = await supabase
          .from("destaque")
          .select("*");
        if (!slidesError && slidesData && slidesData.length) {
          setSlides(slidesData);
        } else {
          setSlides(localSlides);
        }
      } catch (err) {
        console.error("Erro ao carregar slides:", err);
        setSlides(localSlides);
      }

    };

    load();
  }, []);

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

        <MovieCard searchQuery={searchQuery} movies={movies} />
      </div>
    </main>
  );
}

export default Home;