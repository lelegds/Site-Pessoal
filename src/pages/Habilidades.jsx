import React from "react";
import "./Habilidades.css";

// categorised skill data for the redesign
const skillCategories = [
  { title: "Frontend", skills: ["React", "JavaScript", "HTML", "CSS"] },
  { title: "Backend", skills: ["Node.js", "Express", "Python"] },
  { title: "Banco de Dados", skills: ["PostgreSQL", "MongoDB", "MySQL"] },
  { title: "Ferramentas", skills: ["Git", "Docker", "VS Code", "Figma"] },
];

export default function Habilidades() {
  return (
    <main className="page">
      <section className="container skills-head">
        <h2 className="section-title">Habilidades</h2>
        <p className="muted">
          Confira abaixo as categorias e as tecnologias com as quais trabalho.
        </p>
      </section>

      <section className="container skills-cards">
        {skillCategories.map(({ title, skills }) => (
          <div key={title} className="card skill-card">
            <h3 className="skill-card-title">{title}</h3>
            <div className="chip-row">
              {skills.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
