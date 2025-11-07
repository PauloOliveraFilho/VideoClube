function AboutUs() {
  return (
    <main className="about-page">
      <header className="about-hero">
        <h1>Sobre nós</h1>
        <p>
          O VideoClube conecta apaixonados por cinema com um catálogo
          cuidadosamente selecionado. Nossa missão é tornar a experiência de
          assistir filmes simples, agradável e acessível.
        </p>
      </header>

      <section className="about-mission">
        <h2>Nossa missão</h2>
        <p>
          Oferecer títulos relevantes e um serviço confiável, valorizando
          diversidade de gêneros e vozes do cinema. Buscamos qualidade no
          atendimento e inovação na forma de apresentar o conteúdo.
        </p>
      </section>

      <section className="about-team">
        <h2>Equipe</h2>
        <div className="team-grid">
          <article className="team-card">
            <div className="avatar">🎬</div>
            <h3>Paulo Marcondes</h3>
            <p>Desenvolvedor</p>
          </article>
        </div>
      </section>

      <section className="about-contact">
        <h2>Contato</h2>
        <p>
          Tem sugestões ou precisa de suporte? Envie um email para{" "}
          <a href="mailto:contato@videoclube">VideoClube@gmail.com</a>
        </p>
      </section>
    </main>
  );
}

export default AboutUs;
