import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/images/Hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
        <p className="mb-6 text-sm uppercase tracking-[0.4em] text-white/70">Immersive View</p>
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
          Räume erleben.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
          Professionelle 360°-Panoramen und virtuelle Touren, die Ihre Räume zum Leben erwecken.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="#leistungen"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-black shadow-lg transition hover:-translate-y-1"
          >
            Leistungen entdecken
          </Link>
          <Link
            href="#beispiele"
            className="rounded-full border border-white/80 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-sm transition hover:-translate-y-1"
          >
            Beispiele ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}
