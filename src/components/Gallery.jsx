import { useEffect, useState } from "react";
import { gallery, videos } from "../data";
import Photo from "./Photo";

export default function Gallery() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i + 1) % gallery.length);
      if (e.key === "ArrowLeft") setActive((i) => (i - 1 + gallery.length) % gallery.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  if (gallery.length === 0) return null;

  return (
    <section className="section" id="gallery">
      <h2 className="section__title">Gallery</h2>
      <div className="grid">
        {gallery.map((g, i) => (
          <button key={g.src} className="grid__item" onClick={() => setActive(i)} aria-label={`Open ${g.alt}`}>
            <Photo src={g.src} alt={g.alt} />
          </button>
        ))}
      </div>

      {videos.length > 0 && (
        <div className="videos">
          {videos.map((v) => (
            <div className="video" key={v.id}>
              <iframe
                src={`https://www.youtube.com/embed/${v.id}`}
                title={v.title}
                loading="lazy"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      )}

      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
          <button className="lightbox__close" aria-label="Close">×</button>
          <img src={gallery[active].src} alt={gallery[active].alt} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
