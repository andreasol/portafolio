// Consola portátil decorativa (estilo Game Boy Color) que enmarca el juego de Scratch.
// Los controles son solo adorno: el juego se maneja desde su propio reproductor.
export default function GameConsole({ projectId, delayMs = 0 }) {
  return (
    <div
      className="rise mx-auto w-full max-w-[440px] self-center rounded-[28px] rounded-br-[72px] bg-grape p-4 shadow-[0_10px_0_#4b2a9a] sm:p-5"
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <div className="rounded-xl rounded-b-[32px] bg-ink p-3 pb-4">
        <div className="mb-2 flex items-center justify-between px-1 font-pixel text-[9px] uppercase text-pac">
          <span className="flex items-center gap-2">
            <span className="blink h-2 w-2 rounded-full bg-red-500" aria-hidden="true" />
            Referencia en Scratch
          </span>
          <span className="text-white/70">1UP</span>
        </div>
        <iframe
          src={`https://scratch.mit.edu/projects/${projectId}/embed`}
          title="Pac-Man jugable hecho en Scratch, usado como referencia para el curso de Snap!"
          loading="lazy"
          allowFullScreen
          className="aspect-[485/402] w-full rounded-md border-0 bg-arcade"
        />
      </div>

      <div className="mt-5 flex items-start justify-between px-2" aria-hidden="true">
        <div className="relative h-20 w-20">
          <span className="absolute inset-x-0 top-1/2 h-7 -translate-y-1/2 rounded bg-ink" />
          <span className="absolute inset-y-0 left-1/2 w-7 -translate-x-1/2 rounded bg-ink" />
        </div>

        <div className="mt-8 flex -rotate-[25deg] gap-3">
          <span className="h-2 w-9 rounded-full bg-ink/70" />
          <span className="h-2 w-9 rounded-full bg-ink/70" />
        </div>

        <div className="flex -rotate-[25deg] gap-3 pt-3">
          <span className="mt-4 grid h-11 w-11 place-items-center rounded-full bg-lilac font-pixel text-[10px] text-ink shadow-[0_3px_0_#1B1530]">
            B
          </span>
          <span className="grid h-11 w-11 place-items-center rounded-full bg-lilac font-pixel text-[10px] text-ink shadow-[0_3px_0_#1B1530]">
            A
          </span>
        </div>
      </div>

      <div className="mt-1 flex -rotate-[25deg] justify-end gap-1.5 pr-3" aria-hidden="true">
        {[0, 1, 2, 3].map((line) => (
          <span key={line} className="h-8 w-1 rounded-full bg-ink/40" />
        ))}
      </div>
    </div>
  );
}
