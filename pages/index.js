import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "SupraGpt-AI innovation Today,Redefinition Tomorrow",
  description: "Let's Strive for a better Tommorow",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero />
      <Brands />
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact />
      <Footer/>
    </main>
  );
}
