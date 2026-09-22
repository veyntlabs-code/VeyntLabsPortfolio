import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import OurClients from "@/components/OurClients/OurClients";
import Pricing from "@/components/Pricing/Pricing";
import Philosophy from "@/components/Philosophy/Philosophy";
import BrandStatement from "@/components/BrandStatement/BrandStatement";
import CTA from "@/components/CTA/CTA";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <OurClients />
      <Pricing />
      <Philosophy />
      <BrandStatement />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
