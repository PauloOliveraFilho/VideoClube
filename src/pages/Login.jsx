import { Link } from "react-router-dom";
import "../styles/pages/Login.css";

function Login() {
  return (
    <main className="login-page">
      <section className="login-container">
        <h2 className="login-title">Entrar</h2>
        <form method="POST" className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              className="form-input"
              id="email"
              type="email"
              placeholder="Digite o seu email"
            />
          </div>
          <div className="form-group">
            {/* Corrigido 'labe' para 'label' */}
            <label htmlFor="senha" className="form-label">
              Senha
            </label>
            <input
              className="form-input"
              id="senha"
              type="password"
              placeholder="Digite a sua senha"
            />
            <Link to={"/recover"} className="link forgot-link">
              Esqueci a senha
            </Link>
          </div>
          <button className="btn-primary" type="submit">
            Entrar
          </button>
        </form>

        <Link to={"/Cadastrar-se"} className="link">
          Cadastrar-se
        </Link>
      </section>
    </main>
  );
}

export default Login;
