import { profile, stats } from "../data";
import Photo from "./Photo";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__text">
        <p className="hero__availability"><span aria-hidden="true"></span>{profile.availability}</p>
        <p className="hero__tag">{profile.tagline}</p>
        <h1 className="hero__name">
          <span>{profile.firstName}</span>
          <span>{profile.lastName}</span>
        </h1>
        <p className="hero__line">{profile.heroLine}</p>
        <div className="hero__cta">
          <a className="btn btn--solid" href="#contact">Hire me</a>
          <a className="btn btn--ghost" href="#projects">View projects</a>
        </div>
        <dl className="hero__stats">
          {stats.map((s) => (
            <div key={s.label}>
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="hero__photo">
        <Photo src={profile.photo} alt={`${profile.name} portrait`} />
      </div>
    </section>
  );
}
