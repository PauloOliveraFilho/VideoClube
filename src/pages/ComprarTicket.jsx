function ComprarTicket() {
  return (
    <main className="ticket-page">
      <section className="ticket-section">
        <h1 className="section-title">Comprar Ingressos</h1>

        <form
          className="ticket-form"
          aria-label="Formulário de compra de ingressos"
        >
          <div className="ticket-fields">
            <div className="ticket-field">
              <label htmlFor="quantity">Quantidade</label>
              <input
                id="quantity"
                name="quantity"
                type="number"
                min="1"
                step="1"
                placeholder="1"
              />
            </div>

            <div className="ticket-field">
              <label htmlFor="price">Valor</label>
              <input
                id="price"
                name="price"
                type="number"
                min="0"
                step="0.01"
                placeholder="0,00"
              />
            </div>

            <div className="ticket-field">
              <label htmlFor="type">Tipo</label>
              <select id="type" name="type" defaultValue="inteira">
                <option value="inteira">Inteira</option>
                <option value="meia">Meia</option>
              </select>
            </div>
          </div>

          <div className="ticket-actions">
            <button type="button" className="ticket-btn">
              Prosseguir
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default ComprarTicket;
