// Contenido del portafolio. Fuente: playbook de Andrea Freire.
export const profile = {
  name: "Andrea Freire",
  fullName: "Andrea Solange Freire Moran",
  role: "Investigadora en ciencias de la computación",
  email: "andrea.freire@usm.cl",
  availability: "Abierta a colaboraciones",
  heroTitle: "Evalúo sesgos de género en los modelos de lenguaje.",
  heroLead:
    "Investigo sesgos de género en procesamiento del lenguaje natural y enseño programación orientada a objetos con juegos en Snap!, Scratch y Python.",
};

export const heroFacts = [
  { label: "Línea", value: "Sesgos de género en PLN" },
  { label: "Destacado", value: "ContraBias: skill para IAs y paper" },
  { label: "Docencia", value: "POO con juegos en Snap!, Scratch y Python" },
];

export const navLinks = [
  { label: "ContraBias", href: "#contrabias" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Trayectoria", href: "#sobre-mi" },
  { label: "Conocimiento", href: "#conocimiento" },
  { label: "Contacto", href: "#contacto" },
];

// icon: nombre del ícono de lucide-react; tone: color de la fila
export const projects = [
  {
    tag: "Revisión",
    title: "Revisión umbrella sobre sesgo de género en PLN",
    status: "Enviado a revista · no publicado",
    summary:
      "Contextualiza 23 revisiones frente a 137 estudios primarios. También tengo un manuscrito sobre RoBERTa y GloVe, enviado a revista y sin publicar.",
    icon: "BookOpen",
    tone: "mint",
  },
  {
    tag: "Docencia",
    title: "Programación orientada a objetos con juegos",
    status: "Snap!, Scratch y Python",
    summary:
      "Enseño programación orientada a objetos con juegos, en Snap!, Scratch y Python. Un ejemplo es el Pac-Man que implementé para el curso de Snap!: la referencia disponible era de Scratch y no se podía trasladar directamente, porque el entorno y sus bloques son distintos.",
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
  { label: "Programación orientada a objetos", tone: "bg-mint", rotate: "-rotate-2" },
  { label: "Python", tone: "bg-lilac", rotate: "rotate-1" },
  { label: "Prompts de sistema para IAs", tone: "bg-mint", rotate: "-rotate-3" },
  { label: "Kiro", tone: "bg-sand", rotate: "rotate-2" },
  { label: "Claude Code", tone: "bg-coral", rotate: "-rotate-2" },
  { label: "Snap! y Scratch", tone: "bg-sand", rotate: "rotate-3" },
  { label: "Docencia con juegos", tone: "bg-coral", rotate: "-rotate-3" },
];

export const score = [
  { value: "900", label: "Casos de traducción evaluados en ContraBias" },
  { value: "137", label: "Estudios primarios en la revisión umbrella" },
  { value: "2", label: "Másteres en seguridad informática e IA" },
];

export const about = [
  "Soy ingeniera en Telemática, tengo dos másteres relacionados con seguridad informática e inteligencia artificial y curso el Doctorado en Informática en la Universidad Técnica Federico Santa María. Soy profesora de jornada parcial desde 2024 y enseño programación orientada a objetos con juegos, en Snap!, Scratch y Python.",
  "Antes de la investigación construí sistemas: un sistema hospitalario, aplicaciones y un geoportal para los Andes Tropicales y una base de datos regional para la OMM. También trabajé en administración de sistemas y ciberseguridad.",
];

// Proyecto destacado: se muestra en su propia sección, antes de la lista.
export const featured = {
  name: "ContraBias",
  subtitle: "A Counterfactual System Prompt Plugin for Gender Bias Mitigation",
  badges: ["Skill para IAs", "Paper aceptado en las Jornadas Chilenas"],
  note: "Aún no está publicado. Falta confirmar el nombre completo y la fecha de la presentación.",
  link: { label: "Ver el skill en GitHub", href: "https://github.com/andreasol/ContraBias/" },
  stat: { value: "900", label: "casos de traducción de ocupaciones evaluados" },
  steps: [
    {
      title: "El problema",
      text: "Al traducir ocupaciones, los modelos de lenguaje asignan género y eligen pronombres con sesgo. Estudio si instrucciones contrafactuales pueden reducirlo.",
    },
    {
      title: "Qué construí",
      text: "ContraBias es un skill para IAs: un plugin de prompt de sistema contrafactual. Lo diseñé y lo evalué yo.",
    },
    {
      title: "Cómo lo medí",
      text: "Con medidas separadas para errores pronominales, asignación de género a ocupaciones y cumplimiento del plugin. Son indicadores léxicos exploratorios: no prueban por sí solos una mitigación causal ni definitiva.",
    },
  ],
};

// Formación y conocimiento adicional
export const knowledge = [
  {
    title: "Bootcamp de herramientas con Kiro y Claude Code",
    text: "Bootcamp centrado en usar herramientas de desarrollo con IA para resolver problemas y dolores reales. Con él construí este portafolio.",
    tools: ["Kiro", "Claude Code"],
  },
];
