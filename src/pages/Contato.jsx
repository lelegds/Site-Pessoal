import React from "react";
import { profile } from "../data/profile";
import "./Contato.css";

export default function Contato() {
  return (
    <main className="page">
      <section className="container contact-head">
        <h2 className="section-title">Contato</h2>
        <p className="muted">Me chama por onde for melhor 🙂</p>
      </section>

      <section className="container panel">
        <div className="contact-box">
          <div>
            <div className="label">Email</div>
            <a className="link" href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>

          <div>
            <div className="label">LinkedIn</div>
            <a className="link" href={profile.linkedin} target="_blank" rel="noreferrer">
              {profile.linkedin}
            </a>
          </div>

          <div>
            <div className="label">GitHub</div>
            <a className="link" href={profile.github} target="_blank" rel="noreferrer">
              {profile.github}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}