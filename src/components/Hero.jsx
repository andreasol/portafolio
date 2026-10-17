import { ArrowRight } from "lucide-react";
import PacMan from "./PacMan.jsx";
import Ghost from "./Ghost.jsx";
import { profile, heroFacts } from "../data/profile.js";

// Retraso escalonado para la entrada (único movimiento orquestado de la página)
const delay = (ms) => ({ animationDelay: `${ms}ms` });

export default function Hero() {
  return (
    <section id="inicio" className="px-4 pt-6 sm:px-6 sm:pt-10">
      <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-[1.5fr_1fr]">
        <div className="relative overflow-hidden rounded-[32px] bg-lilac p-6 sm:p-10">
          <p className="rise flex flex-wrap items-center gap-3 text-sm" style={delay(0)}>
            <span className="rounded-full bg-mint px-3 py-1 font-medium text-emerald-900">
              {profile.availability}
            </span>
            <span className="text-ink/70">{profile.role}</span>
          </p>

          <h1
            className="rise mt-6 max-w-xl text-3xl font-semibold sm:text-6xl"
            style={delay(120)}
          >
            {profile.heroTitle}
          </h1>
          <p className="rise mt-4 max-w-lg text-ink/80" style={delay(180)}>
            {profile.heroLead}
          </p>

          <dl className="rise mt-8 grid grid-cols-1 gap-2 sm:grid-cols-3" style={delay(240)}>
            {heroFacts.map((fact) => (
              <div key={fact.label} className="rounded-2xl bg-white/50 px-4 py-3">
                <dt className="text-sm text-ink/70">{fact.label}</dt>
                <dd className="font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="rise mt-8 flex flex-wrap items-center gap-3" style={delay(360)}>
            <a
              href="#proyectos"
              className="group inline-flex items-center gap-3 rounded-full bg-grape py-2 pl-6 pr-2 font-medium text-white transition-colors hover:bg-ink"
            >
              Ver proyectos
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-grape transition-transform group-hover:translate-x-1">
                <ArrowRight size={18} />
              </span>
            </a>
            <a
              href="#contacto"
              className="rounded-full bg-white/60 px-6 py-3 font-medium transition-colors hover:bg-white"
            >
              Contactar
            </a>
          </div>
        </div>

        <div
          className="rise relative grid min-h-[260px] place-items-center overflow-hidden rounded-[32px] bg-arcade p-6"
          style={delay(200)}
        >
          <span className="blink absolute left-5 top-5 font-pixel text-sm text-white">
            1UP
          </span>
          <div className="flex items-center gap-4">
            <PacMan size={64} />
            <span className="flex gap-3" aria-hidden="true">
              <span className="h-3 w-3 rounded-full bg-sand" />
              <span className="h-3 w-3 rounded-full bg-sand" />
              <span className="h-3 w-3 rounded-full bg-sand" />
            </span>
            <Ghost size={44} className="bob" />
          </div>
          <p className="absolute bottom-5 px-4 text-center font-pixel text-[10px] uppercase text-pac">
            Pac-Man en Snap!
          </p>
        </div>
      </div>
    </section>
  );
}
