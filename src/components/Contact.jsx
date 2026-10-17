import { Mail } from "lucide-react";
import CalendlyButton from "./CalendlyButton.jsx";
import { profile } from "../data/profile.js";

export default function Contact() {
  return (
    <section id="contacto" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-[32px] bg-lilac p-6 text-center sm:p-14">
        <h2 className="mx-auto max-w-2xl text-2xl font-semibold sm:text-4xl">
          ¿Investigas sesgos o tecnologías lingüísticas responsables? Colaboremos.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-ink/80">
          Escríbeme si tu grupo o equipo trabaja en PLN, equidad o ciberseguridad.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-3 rounded-full bg-grape px-6 py-4 font-medium text-white transition-colors hover:bg-ink"
          >
            <Mail size={20} />
            Escribir a {profile.email}
          </a>
          <CalendlyButton className="bg-white hover:bg-ink hover:text-white" />
        </div>
      </div>
      <p className="mt-10 text-center text-sm text-ink/70">
        © {new Date().getFullYear()} {profile.fullName}
      </p>
    </section>
  );
}
