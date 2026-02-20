import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroProfessionals from "@/assets/hero-professionals.jpg";
import { useLanguage } from "@/context/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return <section id="home" className="relative min-h-screen flex">
      {/* Left Side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <img src={heroProfessionals} alt="Professional team of Net Assets" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/30" />
        <div className="absolute bottom-20 left-10 flex gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }} />
      </div>

      {/* Right Side - Content */}
      <div className="w-full lg:w-1/2 bg-hero-gradient flex items-center justify-center px-6 lg:px-12 pt-32 pb-20 lg:pt-20">
        <div className="max-w-xl animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
            <CheckCircle className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-medium">{t.hero.badge}</span>
          </div>

          <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            {t.hero.heading1} <br />
            <span className="text-gradient-gold">{t.hero.heading2}</span>
          </h1>

          <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            {t.hero.features.map(feature => <div key={feature} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold" />
                <span className="text-primary-foreground/70 text-sm">{feature}</span>
              </div>)}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="xl">
              {t.hero.bookConsultation}
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              {t.hero.learnMore}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Hero Image Background */}
      <div className="lg:hidden absolute inset-0 -z-10 opacity-20" style={{
        backgroundImage: `url(${heroProfessionals})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }} />
    </section>;
};
export default HeroSection;
