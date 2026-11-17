import { achievements } from "../data";

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <h2 className="section__title">Achievements</h2>
      <ul className="awards">
        {achievements.map((a) => (
          <li key={a.title} className="award">
            <span className="award__year">{a.year}</span>
            <div>
              <h3>{a.title}</h3>
              <p>{a.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
