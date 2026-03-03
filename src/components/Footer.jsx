import React from "react";
import { profile } from "../data/profile";
import "../css/footer.css";

export default function Footer() {
  const API = import.meta.env.VITE_API_URL;

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>

        <span className="muted">Feito com React</span>

        <a
          href={`${API}/admin/`}
          target="_blank"
          rel="noopener noreferrer"
          className="admin-link"
        >
          Admin
        </a>
      </div>
    </footer>
  );
}
