import React from "react";
import { profile } from "../data/profile";
import "../css/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="muted">Feito com React</span>
      </div>
    </footer>
  );
}
