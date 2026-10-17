import { ArrowUpRight } from "lucide-react";
import { bootcampApp } from "../data/profile.js";

export default function BootcampApp() {
  return (
    <section id="aplicacion" className="px-4 pt-20 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-[32px] bg-mint p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="flex flex-col">
          <p className="text-sm font-medium text-ink/70">{bootcampApp.tag}</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-4xl">{bootcampApp.name}</h2>
          <p className="mt-3 max-w-md">{bootcampApp.summary}</p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {bootcampApp.tools.map((tool) => (
              <li key={tool} className="rounded-full bg-white px-4 py-1 text-sm font-medium">
                {tool}
              </li>
            ))}
          </ul>

          <a
            href={bootcampApp.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 font-medium text-white transition-colors hover:bg-grape"
          >
            {bootcampApp.link.label}
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
          <p className="mt-4 max-w-sm text-sm text-ink/80">{bootcampApp.note}</p>
        </div>

        <ol className="self-center">
          {bootcampApp.points.map((point, index) => (
            <li
              key={point.title}
              className="grid grid-cols-[auto_1fr] gap-4 border-t border-ink/20 py-6 first:border-t-0 first:pt-0 last:pb-0"
            >
              <span className="font-pixel text-sm text-grape">0{index + 1}</span>
              <div>
                <h3 className="text-xl font-semibold">{point.title}</h3>
                <p className="mt-2">{point.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
