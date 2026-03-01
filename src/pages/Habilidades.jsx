import React from "react";
import "./Habilidades.css";

const skills = ["React", "JavaScript", "HTML/CSS", "Git/GitHub", "APIs REST", "SQL"];

export default function Habilidades() {
  return (
    <main className="page">
      <section className="container skills-head">
        <h2 className="section-title">Habilidades</h2>
        <p className="muted">Liste aqui as tecnologias e ferramentas que você usa.</p>
      </section>

      <section className="container panel">
        <div className="chip-row skills-row">
          {skills.map((s) => (
            <span key={s} className="chip chip-lg">{s}</span>
          ))}
        </div>
      </section>
    </main>
  );
}