
import BadgeSkill from './BadgeSkill';

function KartuProyek({
  judul,
  deskripsi,
  teknologi = [],
  linkGithub,
}) {
  return (
    <article className="project-card">
      <div className="card-top">
        <span className="card-label">PROJECT / 2026</span>
        <span className="card-arrow">↗</span>
      </div>

      <h3>{judul}</h3>
      <p className="project-description">{deskripsi}</p>

      <div className="badge-container">
        {teknologi.map((tech) => (
          <BadgeSkill key={tech} skill={tech} />
        ))}
      </div>

      <a
        href={linkGithub}
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        Lihat Repository <span>↗</span>
      </a>
    </article>
  );
}

export default KartuProyek;
