// Datos de ejemplo: reemplázalos por los tuyos.
export const profile = {
  name: "Tu Nombre",
  role: "Desarrollo web",
  stack: "React · Tailwind",
  email: "conelmedio04@gmail.com",
  availability: "Disponible para proyectos",
};

export const navLinks = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Récord", href: "#record" },
  { label: "Contacto", href: "#contacto" },
];

// icon: nombre del ícono de lucide-react; tone: color de la fila
export const projects = [
  {
    tag: "Tienda",
    title: "Catálogo de cerámica artesanal",
    meta: "Pedidos por WhatsApp · 2025",
    stack: "React, Tailwind",
    icon: "Store",
    tone: "lilac",
  },
  {
    tag: "Panel",
    title: "Agenda para clases particulares",
    meta: "Calendario y recordatorios · 2025",
    stack: "React, Supabase",
    icon: "CalendarDays",
    tone: "sand",
  },
  {
    tag: "Juego",
    title: "Memoria de especies del páramo",
    meta: "Juego educativo · 2024",
    stack: "JavaScript, CSS",
    icon: "Gamepad2",
    tone: "mint",
  },
];

export const skills = [
  { label: "React", tone: "bg-lilac", rotate: "-rotate-6" },
  { label: "Tailwind CSS", tone: "bg-mint", rotate: "rotate-3" },
  { label: "JavaScript", tone: "bg-sand", rotate: "-rotate-2" },
  { label: "Supabase", tone: "bg-mint", rotate: "rotate-6" },
  { label: "Accesibilidad", tone: "bg-coral", rotate: "-rotate-3" },
  { label: "Diseño responsive", tone: "bg-lilac", rotate: "rotate-2" },
  { label: "Animaciones CSS", tone: "bg-sand", rotate: "-rotate-6" },
  { label: "Git y GitHub", tone: "bg-coral", rotate: "rotate-3" },
];

export const score = [
  { value: "12", label: "Proyectos entregados" },
  { value: "3", label: "Años programando" },
  { value: "100", label: "Puntaje Lighthouse" },
];
