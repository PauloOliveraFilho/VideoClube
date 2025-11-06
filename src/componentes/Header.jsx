import "../styles/Header.css";

function Header() {
  return (
    <header>
      <div className="header-logo">
        <img></img>
      </div>
      <div>
        <ul className="header-options">
          <li>Home</li>
          <li>Sobre nós</li>
          <li>Entrar</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
