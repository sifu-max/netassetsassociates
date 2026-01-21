import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ITINSection from "@/components/ITINSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TaxProfessionalSection from "@/components/TaxProfessionalSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import IndustriesSection from "@/components/IndustriesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ITINSection />
        <ServicesSection />
        <AboutSection />
        <TaxProfessionalSection />
        <TestimonialsSection />
        <IndustriesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
