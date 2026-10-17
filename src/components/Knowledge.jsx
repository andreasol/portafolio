import { GraduationCap } from "lucide-react";
import { knowledge } from "../data/profile.js";

export default function Knowledge() {
  return (
    <section id="conocimiento" className="px-4 pt-20 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-6 rounded-[32px] bg-sand p-6 sm:p-10 lg:grid-cols-[1fr_1.4fr]">
        <h2 className="text-2xl font-semibold sm:text-4xl">Conocimiento</h2>
        <ul className="space-y-6">
          {knowledge.map((item) => (
            <li key={item.title} className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white">
                <GraduationCap size={22} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2">{item.text}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <li key={tool} className="rounded-full bg-white px-4 py-1 text-sm font-medium">
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
