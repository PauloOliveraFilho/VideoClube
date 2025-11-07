import "../styles/components/Header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="header-logo">
          <a href="/" className="header-brand" aria-label="Página inicial">
            <span className="brand-mark">VC</span>
            <span className="brand-name">VideoClube</span>
          </a>
        </div>

        <nav aria-label="Navegação principal" className="header-right">
          <ul className="header-options">
            <li>
              <a className="header-link" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="header-link" href="#">
                Sobre nós
              </a>
            </li>
            <li>
              <a className="header-link" href="#">
                Entrar
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
