import "../styles/pages/Cadastrar.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../data/supabaseClient";

function Cadastrar() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);
  const [signedUp, setSignedUp] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg(null);

    if (!email || !senha) {
      setMsg({ type: "error", text: "Preencha email e senha." });
      return;
    }
    if (senha.length < 6) {
      setMsg({ type: "error", text: "Senha deve ter ao menos 6 caracteres." });
      return;
    }
    if (senha !== confirmSenha) {
      setMsg({ type: "error", text: "Senhas não conferem." });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password: senha,
      });
      if (error) {
        setMsg({ type: "error", text: error.message });
      } else {
        setSignedUp(true);
        setMsg({
          type: "success",
          text:
            "Cadastro realizado. Verifique seu e‑mail e confirme a conta antes de entrar. " +
            "Se não receber, verifique a caixa de spam.",
        });
      }
    } catch (err) {
      setMsg({ type: "error", text: err.message || "Erro no cadastro." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="cadastrar-page">
      <section className="cadastrar-container">
        <h2 className="cadastrar-title">Cadastrar-se</h2>
        <form onSubmit={handleSubmit} className="cadastrar-form">
          <div className="form-group">
            <label htmlFor="nome" className="form-label">
              Nome
            </label>
            <input
              id="nome"
              className="form-input"
              type="text"
              placeholder="Digite seu nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
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
              value={confirmSenha}
              onChange={(e) => setConfirmSenha(e.target.value)}
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

          <div className="form-group">
            <button className="btn-primary" type="submit" disabled={loading}>
              {loading ? "Cadastrando..." : "Cadastrar"}
            </button>
          </div>
        </form>

        {signedUp && (
          <div style={{ marginTop: 12, textAlign: "center" }}>
            <p style={{ color: "var(--color-text)" }}>
              Já confirmou o e‑mail? &nbsp;
              <Link to={"/Login"} className="link">
                Ir para login
              </Link>
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Cadastrar;