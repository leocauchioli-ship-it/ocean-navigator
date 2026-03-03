import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import AISensor from "@/components/AISensor";
import Metrics from "@/components/Metrics";
import Comparison from "@/components/Comparison";
import UseCases from "@/components/UseCases";
import AboutKA8 from "@/components/AboutKA8";
import WhyKA8 from "@/components/WhyKA8";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <AISensor />
      <Metrics />
      <Comparison />
      <UseCases />
      <AboutKA8 />
      <WhyKA8 />
      <FAQ />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
