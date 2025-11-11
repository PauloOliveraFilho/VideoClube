import "../styles/components/Header.css";
import { BsFillSunFill, BsFillMoonFill, BsList, BsX } from "react-icons/bs";
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

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeMobile = () => setMobileOpen(false);
  const toggleMobile = () => setMobileOpen((s) => !s);

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="header-logo">
          <Link
            to={"/"}
            className="header-brand"
            aria-label="Página inicial"
            onClick={closeMobile}
          >
            <span className="brand-mark">VC</span>
            <span className="brand-name">VideoClube</span>
          </Link>
        </div>

        <nav aria-label="Navegação principal" className="header-right">
          <ul className="header-options">
            <li>
              <Link to={"/"} className="header-link" onClick={closeMobile}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/Sobre nós"}
                className="header-link"
                onClick={closeMobile}
              >
                Sobre nós
              </Link>
            </li>
            <li>
              <Link to={"/Login"} className="header-link" onClick={closeMobile}>
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

          <button
            className="mobile-menu-btn"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            onClick={toggleMobile}
            type="button"
          >
            {mobileOpen ? <BsX size={20} /> : <BsList size={20} />}
          </button>
        </nav>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-nav ${mobileOpen ? "open" : ""}`}
        role="menu"
        aria-hidden={!mobileOpen}
      >
        <ul>
          <li>
            <Link to={"/"} className="mobile-link" onClick={closeMobile}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/Sobre nós"}
              className="mobile-link"
              onClick={closeMobile}
            >
              Sobre nós
            </Link>
          </li>
          <li>
            <Link to={"/Login"} className="mobile-link" onClick={closeMobile}>
              Entrar
            </Link>
          </li>
          <li>
            <button
              className="mobile-theme-btn"
              onClick={() => {
                toggleTheme();
                closeMobile();
              }}
            >
              {theme === "dark" ? "Tema claro" : "Tema escuro"}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
