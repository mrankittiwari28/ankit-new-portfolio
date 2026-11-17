import { profile, socials } from "../data";

export default function Contact() {
  const links = socials.filter((s) => s.url);
  return (
    <section className="section section--alt" id="contact">
      <h2 className="section__title">Contact</h2>
      <div className="contact">
        <p className="contact__lead">
          Open to full stack, frontend and AI-focused roles, freelance work and collaborations. Reach out directly.
        </p>
        <ul className="contact__list">
          <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
          <li><a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a></li>
          <li>{profile.location}</li>
        </ul>
        {links.length > 0 && (
          <ul className="socials">
            {links.map((s) => (
              <li key={s.name}>
                <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
              </li>
            ))}
          </ul>
        )}
        {profile.resumeUrl && (
          <a className="btn btn--solid" href={profile.resumeUrl} download>Download resume</a>
        )}
      </div>
    </section>
  );
}
