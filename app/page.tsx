import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import Philosophy from "@/components/Philosophy/Philosophy";
import BrandStatement from "@/components/BrandStatement/BrandStatement";
import CTA from "@/components/CTA/CTA";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import CustomCursor from "@/components/CustomCursor/CustomCursor";

export default function Home() {
  return (
    <main>
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Philosophy />
      <BrandStatement />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
