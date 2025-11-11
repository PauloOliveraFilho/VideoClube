import { Link } from "react-router-dom";
import "../styles/pages/FinalizarCompra.css";

function FinalizarCompra() {
  return (
    <main className="finalizar-page">
      <div className="finalizar-container">
        <section className="confirmation-card">
          <h1 className="confirmation-title">Compra Finalizada</h1>
          <p className="confirmation-msg">
            Obrigado pela sua compra. Seu pedido foi processado com sucesso.
          </p>
          <p className="order-details"></p>

          <Link to={"/"} className="finalize-btn">
            Voltar para início
          </Link>
        </section>
      </div>
    </main>
  );
}

export default FinalizarCompra;
