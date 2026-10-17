import { FlaskConical, BookOpen, Gamepad2, Server, ArrowUpRight } from "lucide-react";
import { projects } from "../data/profile.js";

const icons = { FlaskConical, BookOpen, Gamepad2, Server };

// Clases completas para que Tailwind las detecte
const tones = {
  lilac: "bg-lilac",
  sand: "bg-sand",
  mint: "bg-mint",
  coral: "bg-coral",
};

export default function ProjectList() {
  return (
    <section id="proyectos" className="px-4 pt-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold sm:text-4xl">Proyectos</h2>
        <p className="mt-2 max-w-xl text-ink/80">
          Investigación, docencia y sistemas. Indico el estado de cada trabajo: lo que aún no
          está publicado lo marco como tal.
        </p>

        <ul className="mt-8 space-y-3 rounded-[32px] border-2 border-dashed border-grape/60 bg-white p-3 sm:p-5">
          {projects.map((project) => {
            const Icon = icons[project.icon];
            return (
              <li
                key={project.title}
                className={`flex gap-4 rounded-2xl p-4 transition-transform duration-300 hover:-translate-y-1 sm:p-6 ${tones[project.tone]}`}
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white">
                  <Icon size={22} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-ink/70">{project.tag}</p>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 inline-block rounded-full bg-white/70 px-3 py-1 text-sm font-medium">
                    {project.status}
                  </p>
                  <p className="mt-3 max-w-3xl">{project.summary}</p>
                  {project.link && (
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-4 inline-flex items-center gap-2 font-medium underline decoration-2 underline-offset-4 hover:text-grape"
                    >
                      {project.link.label}
                      <ArrowUpRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
