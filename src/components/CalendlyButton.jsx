import { CalendarDays } from "lucide-react";
import { profile } from "../data/profile.js";

const WIDGET_JS = "https://assets.calendly.com/assets/external/widget.js";
const WIDGET_CSS = "https://assets.calendly.com/assets/external/widget.css";

// Carga el script de Calendly solo cuando se pulsa el botón (evita cookies al abrir la página)
function loadCalendly() {
  if (window.Calendly) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = WIDGET_CSS;
    document.head.appendChild(css);

    const script = document.createElement("script");
    script.src = WIDGET_JS;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

export default function CalendlyButton({ className = "" }) {
  const url = profile.calendlyUrl;
  if (!url) return null;

  const openCalendar = async () => {
    try {
      await loadCalendly();
      window.Calendly.initPopupWidget({ url });
    } catch {
      // Si el script no carga (bloqueador, sin conexión), abre Calendly en otra pestaña
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <button
      type="button"
      onClick={openCalendar}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-colors ${className}`}
    >
      <CalendarDays size={20} aria-hidden="true" />
      Agendar una reunión
    </button>
  );
}
