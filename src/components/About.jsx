import { about, facts, education } from "../data";

export default function About() {
  return (
    <section className="section" id="about">
      <h2 className="section__title">About</h2>
      <div className="about">
        <div className="about__copy">
          {about.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div>
          <dl className="facts">
            {facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
          <div className="edu">
            <h3>{education.degree}</h3>
            <p>{education.school}</p>
            <p>{education.period} · {education.score}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
