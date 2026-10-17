import { ArrowUpRight, Sparkles, FileText } from "lucide-react";
import { featured } from "../data/profile.js";

const badgeIcons = [Sparkles, FileText];

// Proyecto destacado: ocupa todo el ancho y es el protagonista después del inicio
export default function ContraBiasFeature() {
  return (
    <section id="contrabias" className="px-4 pt-20 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-[32px] bg-grape p-6 text-white sm:p-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="flex flex-col">
          <p className="font-pixel text-[10px] uppercase text-pac">Proyecto destacado</p>
          <h2 className="mt-4 text-4xl font-semibold sm:text-6xl">{featured.name}</h2>
          <p className="mt-3 max-w-md text-white/90">{featured.subtitle}</p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {featured.badges.map((badge, index) => {
              const Icon = badgeIcons[index];
              return (
                <li
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink"
                >
                  <Icon size={16} aria-hidden="true" />
                  {badge}
                </li>
              );
            })}
          </ul>

          <p className="mt-8 font-pixel text-4xl text-pac sm:text-6xl">{featured.stat.value}</p>
          <p className="mt-2 max-w-xs text-white/90">{featured.stat.label}</p>

          <a
            href={featured.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-pac px-6 py-3 font-medium text-ink transition-colors hover:bg-white"
          >
            {featured.link.label}
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
          <p className="mt-4 max-w-sm text-sm text-white/80">{featured.note}</p>
        </div>

        <ol className="self-center">
          {featured.steps.map((step, index) => (
            <li
              key={step.title}
              className="grid grid-cols-[auto_1fr] gap-4 border-t border-white/30 py-6 first:border-t-0 first:pt-0 last:pb-0"
            >
              <span className="font-pixel text-sm text-pac">0{index + 1}</span>
              <div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-white/90">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
