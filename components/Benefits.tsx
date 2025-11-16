import { Clock3, Eye, MonitorSmartphone, PiggyBank, Sparkles, TrendingUp } from "lucide-react";
import SectionTitle from "./SectionTitle";
import BenefitsGrid from "./BenefitsGrid";

const benefits = [
  {
    title: "Mehr Anfragen",
    text: "Konvertieren Sie Website-Besucherinnen durch messbar mehr Vertrauen.",
    icon: TrendingUp
  },
  {
    title: "Höhere Sichtbarkeit",
    text: "Interaktive Inhalte werden länger angesehen und verbessern SEO-Signale.",
    icon: Eye
  },
  {
    title: "Bessere Präsentation",
    text: "Digitale Touren transportieren Interior-Details in perfekter Qualität.",
    icon: MonitorSmartphone
  },
  {
    title: "Realistisches Raumerlebnis",
    text: "Virtuelle Rundgänge vermitteln authentisches Raumgefühl in jedem Browser.",
    icon: Sparkles
  },
  {
    title: "Online 24/7 verfügbar",
    text: "Ihre Location bleibt immer geöffnet – auch für internationale Zielgruppen.",
    icon: Clock3
  },
  {
    title: "Zeit- & Kostenersparnis",
    text: "Reduzieren Sie Besichtigungstermine und erklären Sie Konzepte effizienter.",
    icon: PiggyBank
  }
];

export default function Benefits() {
  return (
    <section id="vorteile" className="section-padding">
      <SectionTitle
        eyebrow="Vorteile"
        title="Ihre Vorteile"
        subtitle="Warum 360°-Touren Ihr Business voranbringen"
      />
      <BenefitsGrid items={benefits} />
    </section>
  );
}
