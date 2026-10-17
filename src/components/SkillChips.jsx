import { skills } from "../data/profile.js";

export default function SkillChips() {
  return (
    <section id="habilidades" className="px-4 pt-20 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-[32px] bg-white p-6 sm:p-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div>
          <h2 className="text-2xl font-semibold sm:text-4xl">Habilidades</h2>
          <p className="mt-3 text-ink/80">
            De la evaluación de sesgos en modelos de lenguaje a la administración de sistemas
            y la docencia de programación.
          </p>
        </div>

        <ul className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {skills.map((skill, index) => (
            <li
              key={skill.label}
              className={`bob ${skill.rotate}`}
              style={{ animationDelay: `${index * 0.4}s` }}
            >
              <span
                className={`block cursor-default rounded-full px-5 py-3 text-sm font-medium shadow-sm transition-transform duration-200 hover:scale-110 hover:rotate-0 ${skill.tone}`}
              >
                {skill.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
