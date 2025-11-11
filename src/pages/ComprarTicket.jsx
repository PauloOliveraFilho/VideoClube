import { Link, useParams } from "react-router-dom";
import "../styles/pages/ComprarTicket.css";
import moviesData from "../data/moviesData.json";
import { useState, useEffect, useRef } from "react";
import formatCurrency from "../utils/money";
import seatsData from "../data/seatsData.json";

function ComprarTicket() {
  const { id } = useParams();
  const movie = moviesData[id] ?? { title: "Ingressos", price: 0 };
  const [quantidade, setQuantidade] = useState(1);
  const [tipo, setTipo] = useState("inteira");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isSeatPanelOpen, setSeatPanelOpen] = useState(false);
  const seatPanelRef = useRef(null);
  const seatToggleRef = useRef(null);

  const rows = ["A", "B", "C", "D", "E"];
  const cols = 6;
  const occupiedSeats = new Set(seatsData[id]?.occupied ?? []);

  const toggleSeat = (seatId) => {
    if (occupiedSeats.has(seatId)) return;
    setSelectedSeats((prev) => {
      if (prev.includes(seatId)) {
        return prev.filter((s) => s !== seatId);
      }
      if (prev.length >= quantidade) {
        return prev;
      }
      return [...prev, seatId];
    });
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!isSeatPanelOpen) return;
      const panel = seatPanelRef.current;
      const toggleBtn = seatToggleRef.current;
      if (panel && panel.contains(e.target)) return;
      if (toggleBtn && toggleBtn.contains(e.target)) return;
      setSeatPanelOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSeatPanelOpen]);

  const descontoPorIngresso = tipo === "meia" ? movie.price * 0.5 : 0;
  const total = (movie.price - descontoPorIngresso) * quantidade;

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
                value={quantidade}
                onChange={(e) => {
                  const newQty = Math.max(
                    1,
                    parseInt(e.target.value || "1", 10)
                  );
                  setQuantidade(newQty);
                  setSelectedSeats((prev) => prev.slice(0, newQty));
                }}
              />
            </div>

            <div className="ticket-field">
              <label htmlFor="price">Valor</label>
              <span className="ticket-price" aria-live="polite">
                {formatCurrency(movie.price)}
              </span>
            </div>

            <div className="ticket-field">
              <label htmlFor="type">Tipo</label>
              <select
                onChange={(e) => setTipo(e.target.value)}
                id="type"
                name="type"
                value={tipo}
              >
                <option value="inteira">Inteira</option>
                <option value="meia">Meia</option>
              </select>
            </div>
          </div>

          <div className="ticket-seats">
            <button
              ref={seatToggleRef}
              type="button"
              className="seat-toggle-btn"
              onClick={() => setSeatPanelOpen((v) => !v)}
              aria-expanded={isSeatPanelOpen}
              aria-controls="seat-panel"
            >
              Escolher assentos
            </button>

            {isSeatPanelOpen && (
              <div id="seat-panel" ref={seatPanelRef} className="seat-panel">
                <h2 className="section-title">Escolha seu assento</h2>
                <div className="seat-legend">
                  <span className="seat-swatch seat-free" /> Livre
                  <span className="seat-swatch seat-selected" /> Selecionado
                  <span className="seat-swatch seat-occupied" /> Ocupado
                </div>
                <div className="seat-grid">
                  {rows.map((row) => (
                    <div key={row} className="seat-row">
                      <span className="seat-row-label">{row}</span>
                      {[...Array(cols)].map((_, i) => {
                        const seatId = `${row}${i + 1}`;
                        const isOccupied = occupiedSeats.has(seatId);
                        const isSelected = selectedSeats.includes(seatId);
                        const cls = `seat ${
                          isOccupied
                            ? "seat-occupied"
                            : isSelected
                            ? "seat-selected"
                            : "seat-free"
                        }`;
                        return (
                          <button
                            type="button"
                            key={seatId}
                            className={cls}
                            onClick={() => toggleSeat(seatId)}
                            disabled={isOccupied}
                            aria-pressed={isSelected}
                            aria-label={`Assento ${seatId} ${
                              isOccupied
                                ? "ocupado"
                                : isSelected
                                ? "selecionado"
                                : "livre"
                            }`}
                          >
                            {i + 1}
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </div>
                <div className="seat-summary">
                  Selecionados: {selectedSeats.length}
                  {selectedSeats.length > 0 && ` (${selectedSeats.join(", ")})`}
                  {selectedSeats.length >= quantidade && " — limite atingido"}
                </div>
              </div>
            )}
          </div>

          <div className="ticket-summary">
            <p>Desconto por ingresso: {formatCurrency(descontoPorIngresso)}</p>
            <p>
              Total: <strong>{formatCurrency(total)}</strong>
            </p>
          </div>

          <div className="ticket-actions">
            <Link to={`/Finalizar Compra`} className="ticket-btn">
              Prosseguir
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}

export default ComprarTicket;
