import { profile, socials } from "../data";

export default function Contact() {
  const links = socials.filter((s) => s.url);
  return (
    <section className="section section--alt" id="contact">
      <div className="contact">
        <h2 className="section__title contact__title">Contact</h2>
        <div className="contact__details">
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
            <a className="btn btn--solid contact__resume" href={profile.resumeUrl} download>Download resume</a>
          )}
        </div>
        <div className="contact__message">
          <h3 className="contact__form-title">Send me a message</h3>
          <form
            className="contact__form"
            action="https://getform.io/f/0dNVNLdL"
            method="POST"
            encType="multipart/form-data"
          >
            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="contact-email">Your email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="contact-file">Attach an image or PDF (optional)</label>
            <input
              id="contact-file"
              name="file"
              type="file"
              accept="image/*,.pdf"
            />

            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              placeholder="Enter your message"
              required
            />

            <button className="btn btn--solid" type="submit">Send message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
