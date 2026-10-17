import { Button } from "@/components/ui/button";
import { Briefcase, Calculator, User, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { bookingUrl, serviceOrder } from "@/lib/booking";

const icons = [Briefcase, Calculator, User];

const ServicesSection = () => {
  const { language, t } = useLanguage();

  return (
    <section id="services" className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-gold rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-gold rounded-full" />
      </div>

      <div className="container-width relative">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-wider uppercase">{t.services.label}</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary-foreground mt-3 mb-4">{t.services.heading}</h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">{t.services.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.services.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="group relative bg-navy-light/50 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-4">{service.title}</h3>
                <p className="text-primary-foreground/70 mb-6 leading-relaxed">{service.description}</p>
                <Button variant="hero-outline" size="default" className="group/btn" asChild>
                  <a href={bookingUrl(serviceOrder[index], language)} target="_blank" rel="noopener noreferrer">
                    {t.services.bookNow}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
