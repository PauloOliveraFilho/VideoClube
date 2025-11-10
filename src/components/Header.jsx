import "../styles/components/Header.css";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const [theme, setTheme] = useState(() => {
    const current = document.documentElement.dataset.theme;
    return current === "light" || current === "dark" ? current : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="header-logo">
          <Link to={"/"} className="header-brand" aria-label="Página inicial">
            <span className="brand-mark">VC</span>
            <span className="brand-name">VideoClube</span>
          </Link>
        </div>

        <nav aria-label="Navegação principal" className="header-right">
          <ul className="header-options">
            <li>
              <Link to={"/"} className="header-link">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/sobre"} className="header-link">
                Sobre nós
              </Link>
            </li>
            <li>
              <Link to={"/login"} className="header-link">
                Entrar
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-pressed={theme === "light"}
            title={
              theme === "dark"
                ? "Trocar para tema claro"
                : "Trocar para tema escuro"
            }
          >
            {theme === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
