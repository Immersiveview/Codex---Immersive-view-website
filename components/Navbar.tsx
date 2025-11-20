"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Force "scrolled" state (white bg) if not on home page
  const showWhiteBg = isScrolled || !isHome;

  const navLinks = [
    { href: "/#leistungen", label: "LEISTUNGEN" },
    { href: "/#beispiele", label: "BEISPIELE" },
    { href: "/#vorteile", label: "VORTEILE" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${showWhiteBg ? "bg-white shadow-sm py-2" : "bg-transparent py-6"
        }`}
    >
      <div className="w-full flex items-center justify-between px-6 md:px-12">
        <Link href="/" className="flex items-center">
          <img
            src={showWhiteBg ? "/logo-black.svg" : "/logo-white.svg"}
            alt="Immersive View Logo"
            className={`w-auto transition-all duration-300 ${showWhiteBg ? "h-12" : "h-16 md:h-20"
              }`}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition ${showWhiteBg
                  ? "text-neutral-600 hover:text-black"
                  : "text-white/90 hover:text-white"
                }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#kontakt"
            className={`rounded-full border px-5 py-2 transition text-sm font-medium ${showWhiteBg
                ? "border-black text-black hover:bg-black hover:text-white"
                : "border-white text-white hover:bg-white hover:text-black"
              }`}
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
          <span
            className={`h-0.5 w-7 transition ${open || showWhiteBg ? "bg-black" : "bg-white"
              } ${open ? "rotate-45 translate-y-1.5" : ""}`}
          />
          <span
            className={`h-0.5 w-7 transition ${open || showWhiteBg ? "bg-black" : "bg-white"
              } ${open ? "-rotate-45 -translate-y-1.5" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-medium text-neutral-800"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#kontakt"
            onClick={() => setOpen(false)}
            className="text-xl font-medium text-neutral-800 border border-black rounded-full px-8 py-3"
          >
            BERATUNG ANFRAGEN
          </a>
        </div>
      )}
    </nav>
  );
}

