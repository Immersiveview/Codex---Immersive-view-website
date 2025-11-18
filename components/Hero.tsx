"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.scrollY * 0.25);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="hero" className="relative w-full overflow-hidden hero-gradient">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster="/images/hero-poster.jpg"
        decoding="async"
        style={{
          transform: `translateY(${offset}px)`,
          transition: "transform 0.05s linear"
        }}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/Hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="mx-auto max-w-5xl px-6 text-center text-white">
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-white/80">Immersive View</p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl text-white drop-shadow-2xl">
            Räume erleben – Virtuelle 360°-Touren für Ihr Business.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 drop-shadow-lg">
            Professionelle 360°-Panoramen und virtuelle Touren, die Immobilien, Hotels, Fitnessstudios und Eventlocations
            im Raum Trier und Luxemburg perfekt präsentieren.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="#leistungen"
              className="btn-smooth rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-black shadow-lg hover:-translate-y-1 hover:opacity-90"
            >
              Leistungen entdecken
            </Link>
            <Link
              href="#beispiele"
              className="btn-smooth rounded-full border border-white/80 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-sm hover:-translate-y-1 hover:opacity-90"
            >
              Beispiele ansehen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
