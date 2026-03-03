import React from "react";
import { profile } from "../data/profile";
import "../css/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>

        <span className="muted">Feito com React</span>

        <a
          href="http://127.0.0.1:8000/admin"
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
