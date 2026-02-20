import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, FileCheck } from "lucide-react";
import consultationImg from "@/assets/consultation.jpg";
import { useLanguage } from "@/context/LanguageContext";

const icons = [Shield, Clock, FileCheck];

const ITINSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-width relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={consultationImg} alt="Tax consultation session" className="w-full h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold text-primary rounded-xl px-6 py-4 shadow-lg">
              <p className="font-serif text-3xl font-bold">15+</p>
              <p className="text-sm font-medium">{t.itin.yearsExp}</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">{t.itin.label}</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              {t.itin.heading1} <br />
              <span className="text-gold">{t.itin.heading2}</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{t.itin.description}</p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {t.itin.features.map((feature, i) => {
                const Icon = icons[i];
                return (
                  <div key={feature.title} className="text-center p-4 bg-background rounded-xl shadow-sm border border-border">
                    <Icon className="w-8 h-8 text-gold mx-auto mb-2" />
                    <p className="font-semibold text-sm text-foreground">{feature.title}</p>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                );
              })}
            </div>

            <Button variant="gold" size="lg">
              {t.itin.applyBtn}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITINSection;
