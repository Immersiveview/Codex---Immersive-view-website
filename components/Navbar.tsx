"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/#leistungen", label: "LEISTUNGEN" },
    { href: "/#beispiele", label: "BEISPIELE" },
    { href: "/#vorteile", label: "VORTEILE" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="#hero" className="flex items-center">
          <img src="/logo-black.svg" alt="Immersive View Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10 text-sm font-medium">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-neutral-600 hover:text-black transition">
              {link.label}
            </a>
          ))}
          <a
            href="/#kontakt"
            className="rounded-full border border-black px-5 py-2 hover:bg-black hover:text-white transition text-sm font-medium"
          >
            BERATUNG ANFRAGEN
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden flex flex-col gap-1 p-2 z-50"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Navigation öffnen"
        >
          <span className={`h-0.5 w-7 bg-black transition ${open ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`h-0.5 w-7 bg-black transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden fixed top-[72px] left-0 w-full bg-white shadow-xl border-t border-neutral-200 z-40">
          <nav className="flex flex-col px-6 py-6 gap-6 text-lg font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-neutral-800 py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#kontakt"
              onClick={() => setOpen(false)}
              className="text-neutral-800 border border-black rounded-full px-5 py-3 text-center font-medium"
            >
              BERATUNG ANFRAGEN
            </a>
          </nav>
        </div>
      )}
    </nav>
  );
}

