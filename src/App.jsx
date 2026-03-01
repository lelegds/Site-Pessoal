import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import Habilidades from "./pages/Habilidades";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

import "./css/global.css";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/habilidades" element={<Habilidades />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}
