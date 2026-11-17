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
            <ul className="chips">
              {p.stack.map((s) => <li key={s}>{s}</li>)}
            </ul>
            {p.link && (
              <a className="project__link" href={p.link} target="_blank" rel="noopener noreferrer">
                View project
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
