import { Store, CalendarDays, Gamepad2, ArrowUpRight } from "lucide-react";
import { projects } from "../data/profile.js";

const icons = { Store, CalendarDays, Gamepad2 };

// Clases completas para que Tailwind las detecte
const tones = {
  lilac: "bg-lilac",
  sand: "bg-sand",
  mint: "bg-mint",
};

export default function ProjectList() {
  return (
    <section id="proyectos" className="px-4 pt-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold sm:text-4xl">Proyectos recientes</h2>
        <p className="mt-2 max-w-xl text-ink/80">
          Tres trabajos, cada uno con un problema real y la herramienta justa para resolverlo.
        </p>

        <ul className="mt-8 space-y-3 rounded-[32px] border-2 border-dashed border-grape/60 bg-white p-3 sm:p-5">
          {projects.map((project) => {
            const Icon = icons[project.icon];
            return (
              <li key={project.title}>
                <a
                  href="#contacto"
                  className={`group flex items-center gap-4 rounded-2xl p-4 transition-transform duration-300 hover:-translate-y-1 sm:p-5 ${tones[project.tone]}`}
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white">
                    <Icon size={22} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold sm:text-xl">
                      [{project.tag}] {project.title}
                    </span>
                    <span className="block text-sm text-ink/70">
                      {project.meta} · {project.stack}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={22}
                    className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
