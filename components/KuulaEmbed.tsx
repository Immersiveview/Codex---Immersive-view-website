"use client";

import { useReveal } from "@/hooks/useReveal";

export default function KuulaEmbed() {
  const revealRef = useReveal();
  return (
    <section id="beispiele" ref={revealRef} className="reveal pt-16 pb-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mt-16">
          <h2 className="text-4xl font-semibold text-neutral-900 tracking-tight text-center">Beispiele unserer Arbeit</h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto text-center">
            Erleben Sie die Qualität unserer 360°-Touren in echten Projekten.
          </p>
        </div>

        {/* Beispiel 1 – Immersive Highlights */}
        <div className="mt-10 text-left">
          <h3 className="text-xl font-semibold text-neutral-900 mb-4 text-center">
            Immersive Highlights – 360° Panorama Showcase
          </h3>

          <div className="rounded-2xl bg-white shadow-lg overflow-hidden border border-gray-100 min-h-[640px]">
            <iframe
              className="w-full h-[640px]"
              loading="lazy"

              frameBorder="0"
              allow="xr-spatial-tracking; gyroscope; accelerometer"
              allowFullScreen
              scrolling="no"
              src="https://kuula.co/share/collection/7H4dR?logo=1&info=0&fs=1&vr=1&initload=1&autoplay=1&hideintro=1&controls=0&thumbs=0"
              title="Immersive Highlights – 360° Panorama Showcase"
            />
          </div>
        </div>

        <div className="mt-16 text-left">
          <h3 className="text-xl font-semibold text-neutral-900 mb-4 text-center">
            Chorakee Gym Trier – 360° Studio Tour
          </h3>
          <div className="rounded-2xl bg-white shadow-lg overflow-hidden border border-gray-100 min-h-[640px]">
            <iframe
              className="w-full h-[640px]"
              loading="lazy"
              frameBorder="0"
              allow="xr-spatial-tracking; gyroscope; accelerometer"
              allowFullScreen
              scrolling="no"
              src="https://kuula.co/share/collection/7bpCv?logo=1&info=0&fs=1&vr=1&initload=1&autoplay=1&hideintro=1&controls=0&thumbs=0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
