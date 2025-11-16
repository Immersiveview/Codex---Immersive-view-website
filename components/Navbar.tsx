"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#beispiele", label: "Beispiele" },
  { href: "#vorteile", label: "Vorteile" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const logoSrc = "/logo-black.svg";
  const textColorClass = "text-black";
  const secondaryTextColor = "text-neutral-700";
  const ctaClass = "border-black text-black hover:bg-black hover:text-white";

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#hero" className="flex items-center">
          <img src={logoSrc} alt="Immersive View Logo" className="h-12 w-auto sm:h-14 md:h-16" />
        </Link>

        <nav
          className={`hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.2em] ${secondaryTextColor} lg:flex`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-black"
            >
              {link.label}
            </Link>
          ))}
          <a href="#kontakt" className={`rounded-full border px-5 py-2 transition ${ctaClass}`}>
            Beratung anfragen
          </a>
        </nav>

        <button
          className={`lg:hidden ${textColorClass}`}
          aria-label="Navigation öffnen"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span
            className={`block h-0.5 w-8 rounded-full bg-current transition ${
              isOpen ? "translate-y-1.5 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`mt-1 block h-0.5 w-8 rounded-full bg-current transition ${
              isOpen ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          ></span>
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className="space-y-6 border-t border-neutral-200 bg-white px-6 py-6 text-base font-semibold text-neutral-800">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
            <a
              href="#kontakt"
              className="block rounded-full border border-black px-5 py-3 text-center"
              onClick={() => setIsOpen(false)}
            >
              Beratung anfragen
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
