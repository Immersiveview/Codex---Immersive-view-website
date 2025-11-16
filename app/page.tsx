import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import KuulaEmbed from "@/components/KuulaEmbed";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
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
