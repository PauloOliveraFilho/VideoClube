import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <strong>VideoClube</strong>
          <span>Seu cinema online.</span>
        </div>

        <nav className="footer-nav" aria-label="Links do rodapé">
          <ul className="footer-links">
            <li>E-mail: VideoClube@gmail.com</li>
            <li>Tel: (15) 99884-3221</li>
          </ul>
        </nav>

        {/* Informações legais */}
        <div>
          <p>
            &copy; {new Date().getFullYear()} VideoClube. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
