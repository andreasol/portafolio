import DotTrack from "./DotTrack.jsx";
import { score } from "../data/profile.js";

// Elemento firma: marcador arcade con Pac-Man comiéndose los puntos
export default function ArcadeScore() {
  return (
    <section id="record" className="px-4 pt-20 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-[32px] bg-arcade p-3 sm:p-5">
        <div className="rounded-[24px] border-[3px] border-maze p-5 sm:p-8">
          <div className="flex items-center justify-between font-pixel text-xs text-white sm:text-sm">
            <span>1UP</span>
            <span>Mi récord</span>
          </div>

          <dl className="mt-8 grid gap-6 sm:grid-cols-3">
            {score.map((item) => (
              <div key={item.label} className="rounded-2xl border-2 border-maze px-4 py-5">
                <dd className="font-pixel text-2xl text-pac sm:text-4xl">{item.value}</dd>
                <dt className="mt-3 text-sm text-white">{item.label}</dt>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <DotTrack />
          </div>
        </div>
      </div>
    </section>
  );
}
