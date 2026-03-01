import React from "react";
import { profile } from "../data/profile";
import { NavLink } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <main className="page">
      <section className="container home-hero">
        <div className="home-hero-left">
          <h1 className="home-hero-title">{profile.name}</h1>
          <p className="home-hero-tagline">{profile.tagline}</p>

          <div className="home-hero-actions">
            <NavLink to="/projetos" className="btn btn-primary">
              Ver Projetos
            </NavLink>

            <button
              className="btn btn-outline"
              type="button"
              onClick={() => alert("Depois ligamos isso ao CV (upload/link) 🙂")}
            >
              Baixar CV
            </button>
          </div>
        </div>

        <div className="home-hero-right">
          <div className="mock">
            <div className="mock-sky" />
            <div className="mock-cloud mock-cloud-1" />
            <div className="mock-cloud mock-cloud-2" />
            <div className="mock-ground" />
            <div className="mock-hill" />
            <div className="mock-badge">ilustração</div>
          </div>
        </div>
      </section>

      <section className="container home-contact-strip">
        <div className="home-contact-title">Contato</div>
        <div className="home-contact-links">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
