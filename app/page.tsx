import Hero from "./components/home/Hero";
import Stats from "./components/home/Stats";
import Services from "./components/home/Services";
import WhyUs from "./components/home/WhyUs";
import Industries from "./components/home/Industries";
import Testimonials from "./components/home/Testimonials";
import FAQ from "./components/home/FAQ";
import Partners from "./components/home/Partners";
import CTA from "./components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <Industries />
      <Testimonials />
      <FAQ />
      <Partners />
      <CTA />
    </>
  );
}
