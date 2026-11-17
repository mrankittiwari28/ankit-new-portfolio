import { useState } from "react";

// Image na mile to initials wala placeholder dikhata hai
export default function Photo({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`photo-fallback ${className}`} role="img" aria-label={alt}>
        <span>AT</span>
      </div>
    );
  }
  return (
    <img className={className} src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
  );
}
