import PacMan from "./PacMan.jsx";
import Ghost from "./Ghost.jsx";

const DOT_COUNT = 40;

// Pista de puntos: Pac-Man avanza, una capa del color del fondo "borra" los puntos
// a su paso y un fantasma lo persigue.
export default function DotTrack({ bg = "bg-arcade" }) {
  return (
    <div className="relative h-14 w-full overflow-hidden" aria-hidden="true">
      <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-between px-2">
        {Array.from({ length: DOT_COUNT }, (_, i) => (
          <span
            key={i}
            className={`block rounded-full bg-sand ${
              i % 10 === 9 ? "h-3 w-3" : "h-1.5 w-1.5"
            }`}
          />
        ))}
      </div>
      <div className={`track-cover absolute inset-y-0 left-0 ${bg}`} />
      <div className="track-pac absolute top-1/2 -mt-5">
        <PacMan size={40} />
      </div>
      <div className="track-ghost absolute top-1/2 -mt-5">
        <Ghost size={40} />
      </div>
    </div>
  );
}
