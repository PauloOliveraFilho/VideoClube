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
          <p className="order-details">
            Resumo: itens comprados, total e dados de entrega.
          </p>

          <a className="finalize-btn" href="/">
            Voltar para início
          </a>

          <a className="back-link" href="/catalogo">
            Ver catálogo de filmes
          </a>
        </section>
      </div>
    </main>
  );
}

export default FinalizarCompra;
