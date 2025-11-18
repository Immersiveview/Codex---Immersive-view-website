import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import KuulaEmbed from "@/components/KuulaEmbed";
import Services from "@/components/Services";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <KuulaEmbed />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
