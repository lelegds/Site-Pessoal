import React from "react";

export default function ProjectCard({ project }) {
  const { title, description, image, tags, repoUrl, liveUrl } = project;

  return (
    <article className="card">
      <div className="card-media">
        <div className="card-placeholder">
          {title
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 2)}
        </div>
      </div>

      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>

        {tags?.length ? (
          <div className="chip-row">
            {tags.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        ) : null}

        <div className="card-actions">
          {repoUrl ? (
            <a
              className="btn btn-primary"
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          ) : null}
          {liveUrl ? (
            <a
              className="btn btn-outline"
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
