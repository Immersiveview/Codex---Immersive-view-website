export default function KuulaEmbed() {
  return (
    <section id="beispiele" className="pt-16 pb-16">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-black">Virtuelle Touren</h1>
        <p className="mt-4 text-lg text-gray-500">Erleben Sie die Qualität unserer 360°-Touren</p>

        <div className="mt-10 rounded-2xl bg-white shadow-lg overflow-hidden border border-gray-100">
          <iframe
            width="100%"
            height="640"
            frameBorder="0"
            allow="xr-spatial-tracking; gyroscope; accelerometer"
            allowFullScreen
            scrolling="no"
            src="https://kuula.co/share/collection/7bpCv?logo=0&info=0&fs=1&vr=1&sd=1&initload=1&autoload=1&thumbs=0"
            title="360° Virtuelle Tour"
          />
        </div>
      </div>
    </section>
  );
}
