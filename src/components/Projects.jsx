import { projects } from "../data";

export default function Projects() {
  return (
    <section className="section section--alt" id="projects">
      <h2 className="section__title">Projects</h2>
      <div className="projects">
        {projects.map((p) => (
          <article key={p.title} className="project">
            <p className="project__tag">{p.tag}</p>
            <h3>{p.title}</h3>
            <p className="project__detail">{p.detail}</p>
            {p.impact && <p className="project__impact">{p.impact}</p>}
            <ul className="chips">
              {p.stack.map((s) => <li key={s}>{s}</li>)}
            </ul>
            {(p.link || p.github) && (
              <div className="project__actions">
                {p.link && <a className="project__link" href={p.link} target="_blank" rel="noopener noreferrer">Live demo</a>}
                {p.github && <a className="project__link" href={p.github} target="_blank" rel="noopener noreferrer">View code</a>}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
