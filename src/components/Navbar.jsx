import { useEffect, useState } from "react";
import { profile } from "../data";

import { gallery } from "../data";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Achievements", "#achievements"],
  ...(gallery.length ? [["Gallery", "#gallery"]] : []),
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${solid || open ? "nav--solid" : ""}`}>
      <a className="nav__brand" href="#top" onClick={() => setOpen(false)}>
        {profile.firstName} {profile.lastName}
      </a>
      <button
        className="nav__toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span /><span />
      </button>
      <nav className={`nav__links ${open ? "is-open" : ""}`}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
    </header>
  );
}
