import "../styles/components/Header.css";
import { Link } from "react-router-dom";

function Header() {
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
        </nav>
      </div>
    </header>
  );
}

export default Header;
