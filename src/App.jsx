import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Login from "./pages/Login.jsx";
import Cadastrar from "./pages/Cadastrar.jsx";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrar-se" element={<Cadastrar />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
