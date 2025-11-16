import { Mail, Phone } from "lucide-react";

const tiles = [
  {
    title: "E-Mail",
    icon: Mail,
    items: [
      {
        label: "jesse.rohdenburg@immersive-view.net",
        href: "mailto:jesse.rohdenburg@immersive-view.net"
      }
    ]
  },
  {
    title: "Telefon",
    icon: Phone,
    items: [
      {
        label: "+49 173 3212572",
        href: "tel:+491733212572"
      }
    ]
  }
];

export default function Contact() {
  return (
    <section id="kontakt" className="py-24">
      <div className="mx-auto max-w-4xl px-6 text-center space-y-10">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-black">Kontaktieren Sie uns</h1>
          <p className="text-lg text-gray-600">Bereit für Ihre eigene 360°-Tour? Wir beraten Sie gerne</p>
          <div className="pt-4 space-y-2">
            <h2 className="text-2xl font-semibold text-black">Lassen Sie uns sprechen</h2>
            <p className="text-gray-600">
              Wir freuen uns darauf, Ihr Projekt kennenzulernen und Sie persönlich zu beraten. Kontaktieren Sie uns für ein
              unverbindliches Erstgespräch.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {tiles.map((tile) => {
            const Icon = tile.icon;
            return (
              <div
                key={tile.title}
                className="bg-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-gray-200 text-black">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mt-4 space-y-1">
                  <p className="text-xl font-semibold text-black">{tile.title}</p>
                  {tile.items.map((item) => (
                    <a key={item.label} href={item.href} className="block text-gray-700 hover:text-black">
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
