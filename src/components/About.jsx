import { about } from "../data/profile.js";

export default function About() {
  return (
    <section id="sobre-mi" className="px-4 pt-20 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-6 rounded-[32px] bg-mint p-6 sm:p-10 lg:grid-cols-[1fr_1.4fr]">
        <h2 className="text-2xl font-semibold sm:text-4xl">Sobre mí y trayectoria</h2>
        <div className="space-y-4">
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
