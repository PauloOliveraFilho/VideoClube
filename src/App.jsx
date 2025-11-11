import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Login from "./pages/Login.jsx";
import Cadastrar from "./pages/Cadastrar.jsx";
import Filme from "./pages/Filme.jsx";
import ComprarTicket from "./pages/ComprarTicket.jsx";
import FinalizarCompra from "./pages/FinalizarCompra.jsx";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sobre nós" element={<AboutUs />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cadastrar-se" element={<Cadastrar />} />
          <Route path="/Detalhes do Filme/:id" element={<Filme />} />
          <Route path="/Comprar Ingresso/:id" element={<ComprarTicket />} />
          <Route path="/Finalizar Compra/:id" element={<FinalizarCompra />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
