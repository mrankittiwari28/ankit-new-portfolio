import { skillGroups } from "../data";

export default function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <h2 className="section__title">Skills</h2>
      <div className="skills">
        {skillGroups.map((g) => (
          <div key={g.title} className="skills__group">
            <h3>{g.title}</h3>
            <ul className="chips">
              {g.items.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
