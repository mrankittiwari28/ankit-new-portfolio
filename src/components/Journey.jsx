import { experience } from "../data";

export default function Journey() {
  return (
    <section className="section" id="experience">
      <h2 className="section__title">Experience</h2>
      <ol className="timeline timeline--wide">
        {experience.map((j) => (
          <li key={j.company}>
            <span className="timeline__period">{j.period}</span>
            <h3>{j.role}</h3>
            <p className="timeline__company">{j.company}</p>
            <ul className="bullets">
              {j.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
