import React from "react";
import { NavLink } from "react-router-dom";
import { profile } from "../data/profile";
import "../css/navbar.css";

const linkClass = ({ isActive }) =>
  "nav-link" + (isActive ? " nav-link--active" : "");

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <NavLink to="/" className="brand">
          {profile.name}
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/projetos" className={linkClass}>
            Projetos
          </NavLink>
          <NavLink to="/habilidades" className={linkClass}>
            Habilidades
          </NavLink>
          <NavLink to="/sobre" className={linkClass}>
            Sobre
          </NavLink>
          <NavLink to="/contato" className={linkClass}>
            Contato
          </NavLink>
        </nav>

        <NavLink to="/contato" className="btn btn-outline">
          Fale comigo
        </NavLink>
      </div>
    </header>
  );
}
