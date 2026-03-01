import React, { useState } from "react";
import "./Sobre.css";

export default function Sobre() {
  const [tab, setTab] = useState("Formação");

  const content = {
    "Formação":
      "Escreva aqui sua formação (curso, universidade, foco).",
    "Interesses":
      "Escreva interesses: produto, dados, IA, UX, inovação, etc.",
    "Objetivos":
      "Seu objetivo atual: estágio/júnior/freela, área e tipo de projeto.",
  };

  return (
    <main className="page">
      <section className="container about">
        <div className="about-left">
          <div className="mock mock-small">
            <div className="mock-sky" />
            <div className="mock-cloud mock-cloud-1" />
            <div className="mock-ground" />
            <div className="mock-hill" />
          </div>
        </div>

        <div className="about-right">
          <h2 className="section-title">Sobre mim</h2>

          <div className="tabs">
            {Object.keys(content).map((k) => (
              <button
                key={k}
                className={"tab" + (tab === k ? " tab-active" : "")}
                onClick={() => setTab(k)}
                type="button"
              >
                {k}
              </button>
            ))}
          </div>

          <div className="panel">
            <p className="text">{content[tab]}</p>
          </div>
        </div>
      </section>
    </main>
  );
}