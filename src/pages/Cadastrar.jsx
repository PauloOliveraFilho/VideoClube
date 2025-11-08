import "../styles/pages/Cadastrar.css";

function Cadastrar() {
  return (
    <main className="cadastrar-page">
      <section className="cadastrar-container">
        <h2 className="cadastrar-title">Cadastrar-se</h2>
        <form method="POST" className="cadastrar-form">
          <div className="form-group">
            <label htmlFor="nome" className="form-label">
              Nome
            </label>
            <input
              id="nome"
              className="form-input"
              type="text"
              placeholder="Digite seu nome completo"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              className="form-input"
              type="email"
              placeholder="Digite seu email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="senha" className="form-label">
              Senha
            </label>
            <input
              id="senha"
              className="form-input"
              type="password"
              placeholder="Digite sua senha"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmSenha" className="form-label">
              Confirmar Senha
            </label>
            <input
              id="confirmSenha"
              className="form-input"
              type="password"
              placeholder="Confirme sua senha"
            />
          </div>

          <div className="form-group">
            <button className="btn-primary" type="submit">
              Cadastrar
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Cadastrar;
