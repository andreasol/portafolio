import { useState } from "react";
import { Menu, X } from "lucide-react";
import PacMan from "./PacMan.jsx";
import { navLinks, profile } from "../data/profile.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-3 z-50 px-4 sm:px-6">
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-white/90 py-2 pl-5 pr-2 shadow-sm backdrop-blur"
      >
        <a href="#inicio" className="flex items-center gap-3 font-semibold">
          <PacMan size={24} />
          <span>{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-lilac"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="grid h-10 w-10 place-items-center rounded-full bg-lilac transition-colors hover:bg-grape hover:text-white md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="mx-auto mt-2 max-w-6xl rounded-3xl bg-white p-2 shadow-sm md:hidden"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 font-medium transition-colors hover:bg-lilac"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
