"use client";

import { BedDouble, Building2, Dumbbell, Landmark, UtensilsCrossed } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { useReveal } from "@/hooks/useReveal";

const services = [
  {
    title: "Hotels",
    description: "Präsentieren Sie Ihre Zimmer, Suiten und Wellness-Bereiche in beeindruckender 360°-Qualität.",
    icon: BedDouble,
    points: ["Höhere Buchungsraten auf Booking.com", "Vertrauen durch Transparenz", "Reduktion von Stornierungen"]
  },
  {
    title: "Immobilien",
    description: "Virtuelle Besichtigungen, die Interessenten überzeugen – rund um die Uhr verfügbar.",
    icon: Building2,
    points: ["Schnellere Vermietung & Verkauf", "Überregionale Interessenten erreichen", "Zeitersparnis bei der Vorauswahl"]
  },
  {
    title: "Fitnessstudios",
    description: "Zeigen Sie Ihre Trainingsräume, Ausstattung und Atmosphäre authentisch.",
    icon: Dumbbell,
    points: ["Neue Mitglieder gewinnen", "Modernität demonstrieren", "24/7 virtuelle Besichtigung"]
  },
  {
    title: "Eventlocations",
    description: "Vermitteln Sie das Potenzial Ihrer Location für Hochzeiten, Firmenfeiern und Events.",
    icon: Landmark,
    points: ["Mehr Anfragen generieren", "Raumaufteilung visualisieren", "Entscheidungsprozess beschleunigen"]
  },
  {
    title: "Restaurants",
    description: "Laden Sie Gäste ein, Ihr Ambiente vor dem Besuch zu erleben – für mehr Reservierungen.",
    icon: UtensilsCrossed,
    points: ["Gäste emotional abholen", "Bessere Google-Maps-Sichtbarkeit", "Einzigartige Atmosphäre zeigen"]
  }
];

export default function Services() {
  const revealRef = useReveal();
  return (
    <section id="leistungen" ref={revealRef} className="reveal py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-neutral-900 tracking-tight text-center mb-4">
            Unsere Leistungen – 360°-Touren & virtuelle Rundgänge
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto text-center mb-12">
            Professionelle Lösungen für Immobilien, Hotels, Fitnessstudios, Eventlocations und Restaurants
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
