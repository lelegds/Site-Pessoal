import React, { useEffect, useMemo, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import "./Projetos.css";

export default function Projetos() {
  const [query, setQuery] = useState("");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/projects/");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        // Normaliza campos para seu front (mantém o ProjectCard feliz)
        const normalized = (data || []).map((p) => ({
          ...p,
          // Se seu ProjectCard usa "image" ou "img", adapte aqui:
          image: p.image_url || p.image || "",
          repo: p.repo_url || p.repo || "",
          demo: p.demo_url || p.demo || "",
          // Tags: se ainda não existe no backend, fica []
          tags: Array.isArray(p.tags)
            ? p.tags
            : typeof p.tags === "string"
              ? p.tags
                  .split(",")
                  .map((t) => t.trim())
                  .filter(Boolean)
              : [],
          // Para ordenação (substitui p.date)
          date: p.created_at || "",
        }));

        setProjects(normalized);
      } catch (err) {
        console.error("Erro ao buscar projetos:", err);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    // Ordena pelos mais recentes (created_at)
    const list = [...projects].sort((a, b) =>
      (b.date || "").localeCompare(a.date || ""),
    );

    if (!q) return list;

    return list.filter((p) => {
      const inTitle = p.title?.toLowerCase().includes(q);
      const inDesc = p.description?.toLowerCase().includes(q);
      const inTags = (p.tags || []).some((t) => t.toLowerCase().includes(q));
      return inTitle || inDesc || inTags;
    });
  }, [query, projects]);

  return (
    <main className="page">
      <section className="container projects-head">
        <div>
          <h2 className="section-title">Projetos</h2>
          <p className="muted">
            {loading
              ? "Carregando projetos..."
              : "Dados vindos da API do Django."}
          </p>
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
