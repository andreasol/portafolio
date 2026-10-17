// Contenido del portafolio. Fuente: playbook de Andrea Freire.
export const profile = {
  name: "Andrea Freire",
  fullName: "Andrea Solange Freire Moran",
  role: "Investigadora en ciencias de la computación",
  email: "andrea.freire@usm.cl",
  availability: "Abierta a colaboraciones",
  heroTitle: "Evalúo sesgos de género en los modelos de lenguaje.",
  heroLead:
    "Investigación aplicada en procesamiento del lenguaje natural y tecnologías lingüísticas responsables.",
};

export const heroFacts = [
  { label: "Línea", value: "Sesgos de género en PLN" },
  { label: "Universidad", value: "UTFSM, Doctorado en Informática" },
  { label: "Docencia", value: "Profesora de jornada parcial" },
];

export const navLinks = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Trayectoria", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

// icon: nombre del ícono de lucide-react; tone: color de la fila
export const projects = [
  {
    tag: "Investigación",
    title: "ContraBias: plugin de prompt contrafactual",
    status: "Aceptado en conferencia · no publicado",
    summary:
      "Evalúa si instrucciones contrafactuales reducen el sesgo de género al traducir ocupaciones. Diseñé el plugin y evalué 900 casos con medidas separadas para errores pronominales, asignación de género a ocupaciones y cumplimiento del plugin. Son indicadores léxicos exploratorios, no prueban una mitigación causal.",
    icon: "FlaskConical",
    tone: "lilac",
    link: { label: "Ver repositorio", href: "https://github.com/andreasol/ContraBias/" },
  },
  {
    tag: "Revisión",
    title: "Revisión paraguas sobre sesgo de género en PLN",
    status: "Enviado a revista · no publicado",
    summary:
      "Contextualiza 23 revisiones frente a 137 estudios primarios. También tengo un manuscrito sobre RoBERTa y GloVe, enviado a revista y sin publicar.",
    icon: "BookOpen",
    tone: "mint",
  },
  {
    tag: "Docencia",
    title: "Pac-Man en Snap!",
    status: "Proyecto del curso",
    summary:
      "Implementé Pac-Man para el curso de Snap!. La referencia disponible era de Scratch y no se podía trasladar directamente, porque el entorno y sus bloques son distintos.",
    icon: "Gamepad2",
    tone: "sand",
  },
  {
    tag: "Sistemas",
    title: "Sistemas y aplicaciones profesionales",
    status: "2011–2019",
    summary:
      "Sistema de gestión hospitalaria en PHP (Hospital Clínica San Vicente, 2018–2019). Aplicaciones para CIIFEN, incluido Bridge-Andes con UICN (2014–2016). Geoportal de cambio climático y biodiversidad de los Andes Tropicales (BID/CIIFEN, 2013–2014). Visores cartográficos, herramientas de aprendizaje electrónico y base de datos regional MCH para la OMM (CIIFEN, 2011–2013).",
    icon: "Server",
    tone: "coral",
  },
];

export const skills = [
  { label: "Sesgos de género en PLN", tone: "bg-lilac", rotate: "-rotate-6" },
  { label: "Síntesis de literatura", tone: "bg-mint", rotate: "rotate-3" },
  { label: "PHP", tone: "bg-sand", rotate: "-rotate-2" },
  { label: "Java", tone: "bg-coral", rotate: "rotate-6" },
  { label: "Scripts Unix", tone: "bg-mint", rotate: "-rotate-3" },
  { label: "Linux, Unix y Windows", tone: "bg-lilac", rotate: "rotate-2" },
  { label: "Alta disponibilidad con DRBD y Heartbeat", tone: "bg-sand", rotate: "-rotate-6" },
  { label: "Respaldo y replicación", tone: "bg-coral", rotate: "rotate-3" },
  { label: "Programación visual en Snap!", tone: "bg-mint", rotate: "-rotate-2" },
  { label: "Docencia de programación", tone: "bg-lilac", rotate: "rotate-1" },
];

export const score = [
  { value: "900", label: "Casos de traducción evaluados en ContraBias" },
  { value: "137", label: "Estudios primarios en la revisión paraguas" },
  { value: "2", label: "Másteres en seguridad informática e IA" },
];

export const about = [
  "Soy ingeniera en Telemática, tengo dos másteres relacionados con seguridad informática e inteligencia artificial y curso el Doctorado en Informática en la Universidad Técnica Federico Santa María. Soy profesora de jornada parcial desde 2024.",
  "Antes de la investigación construí sistemas: un sistema hospitalario, aplicaciones y un geoportal para los Andes Tropicales y una base de datos regional para la OMM. También trabajé en administración de sistemas y ciberseguridad.",
];
