// Pac-Man hecho solo con CSS (ver index.css). `size` en píxeles.
export default function PacMan({ size = 56, className = "" }) {
  return (
    <span
      role="img"
      aria-label="Pac-Man"
      className={`pacman inline-block ${className}`}
      style={{ "--size": `${size}px` }}
    />
  );
}
