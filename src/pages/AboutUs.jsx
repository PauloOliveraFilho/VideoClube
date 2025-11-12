import Card from "../components/Card.jsx";
import "../styles/pages/AboutUs.css";

function AboutUs() {
  return (
    <main className="about-page">
      <header className="about-hero">
        <h1 className="hero-title">Sobre nós</h1>
        <p className="hero-desc">
          O VideoClube conecta apaixonados por cinema com um catálogo
          cuidadosamente selecionado. Nossa missão é tornar a experiência de
          assistir filmes simples, agradável e acessível.
        </p>
      </header>

      <section className="about-mission">
        <h2 className="section-title">Nossa missão</h2>
        <p>
          Oferecer títulos relevantes e um serviço confiável, valorizando
          diversidade de gêneros e vozes do cinema. Buscamos qualidade no
          atendimento e inovação na forma de apresentar o conteúdo.
        </p>
      </section>

      <section className="about-team">
        <h2 className="section-title">Equipe</h2>
        <div className="team-grid">
          <Card
            name="Paulo Marcondes"
            description="Estudante de ADS"
            alt="Foto de Paulo"
            imageUrl="/images/team/PauloF.jpg"
          />
        </div>
      </section>

      <section className="about-contact">
        <h2 className="section-title">Contato</h2>
        <p>
          Tem sugestões ou precisa de suporte? Envie um email para{" "}
          <span>VideoClube@gmail.com</span>
        </p>
      </section>
    </main>
  );
}

export default AboutUs;
