import React, { useMemo, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects as seedProjects } from "../data/projects";
import "./Projetos.css";

export default function Projetos() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = [...seedProjects].sort((a, b) => (b.date || "").localeCompare(a.date || ""));
    if (!q) return list;

    return list.filter((p) => {
      const inTitle = p.title?.toLowerCase().includes(q);
      const inDesc = p.description?.toLowerCase().includes(q);
      const inTags = (p.tags || []).some((t) => t.toLowerCase().includes(q));
      return inTitle || inDesc || inTags;
    });
  }, [query]);

  return (
    <main className="page">
      <section className="container projects-head">
        <div>
          <h2 className="section-title">Projetos</h2>
          <p className="muted">Cards dinâmicos (por dados). Depois trocamos por API do Django.</p>
        </div>

        <input
          className="search"
          placeholder="Buscar por título, tag ou descrição..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </section>

      <section className="container projects-grid">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </section>
    </main>
  );
}