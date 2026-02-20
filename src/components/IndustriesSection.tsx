import { Building2, User, TrendingUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [Building2, User, TrendingUp];

const IndustriesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-primary">
      <div className="container-width">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-wider uppercase">{t.industries.label}</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary-foreground mt-3 mb-4">{t.industries.heading}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.industries.items.map((industry, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="text-center p-8 rounded-2xl bg-navy-light/30 border border-gold/20 hover:border-gold/50 transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mb-6">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-4">{industry.title}</h3>
                <p className="text-primary-foreground/70 leading-relaxed">{industry.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
