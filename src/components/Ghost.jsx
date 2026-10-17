// Fantasma al estilo arcade en SVG. `color` es un hex.
export default function Ghost({ color = "#FF4D4D", size = 44, className = "" }) {
  return (
    <svg
      viewBox="0 0 14 14"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Fantasma"
      shapeRendering="crispEdges"
    >
      <path
        d="M2 14V6a5 5 0 0 1 10 0v8l-1.67-2L8.67 14 7 12l-1.67 2L3.67 12z"
        fill={color}
      />
      <rect x="4" y="5" width="2.4" height="3" rx="1.2" fill="#fff" />
      <rect x="8" y="5" width="2.4" height="3" rx="1.2" fill="#fff" />
      <circle cx="5.6" cy="6.8" r="0.9" fill="#2121DE" />
      <circle cx="9.6" cy="6.8" r="0.9" fill="#2121DE" />
    </svg>
  );
}
