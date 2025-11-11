import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/pages/Login.css";
import { useState, useEffect } from "react";
import { supabase } from "../data/supabaseClient";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    if (location.state?.message) {
      setMsg({ type: "error", text: location.state.message });
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg(null);

    if (!email || !senha) {
      setMsg({ type: "error", text: "Preencha email e senha." });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password: senha,
      });
      if (error) {
        setMsg({ type: "error", text: error.message });
      } else {
        setMsg({ type: "success", text: "Login realizado." });
        const redirectTo = location.state?.from ?? "/";
        navigate(redirectTo);
      }
    } catch (err) {
      setMsg({ type: "error", text: err.message || "Erro no login." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page">
      <section className="login-container">
        <h2 className="login-title">Entrar</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              className="form-input"
              id="email"
              type="email"
              placeholder="Digite o seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="senha" className="form-label">
              Senha
            </label>
            <input
              className="form-input"
              id="senha"
              type="password"
              placeholder="Digite a sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          {msg && (
            <div
              role="status"
              aria-live="polite"
              style={{ color: msg.type === "error" ? "#ef4444" : "#10b981" }}
            >
              {msg.text}
            </div>
          )}

          <button className="btn-primary" type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
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