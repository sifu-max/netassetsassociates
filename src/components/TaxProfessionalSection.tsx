import { GraduationCap, Heart, Users } from "lucide-react";
import lenningImg from "@/assets/lenning.jpeg";
import { useLanguage } from "@/context/LanguageContext";

const highlightIcons = [GraduationCap, Heart, Users];

const TaxProfessionalSection = () => {
  const { t } = useLanguage();

  return (
    <section id="professional" className="section-padding bg-secondary">
      <div className="container-width">
        <div className="text-center mb-12">
          <span className="text-gold font-semibold text-sm tracking-wider uppercase">{t.taxPro.label}</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mt-3">{t.taxPro.heading}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={lenningImg} alt="Lening Matute - Tax Professional" className="w-full h-auto object-cover aspect-[4/5]" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-gold to-gold-light rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border-4 border-gold rounded-xl -z-10" />
          </div>

          <div>
            <h3 className="font-serif text-3xl font-bold text-foreground mb-4">{t.taxPro.name}</h3>
            <p className="text-gold font-semibold text-lg mb-6">{t.taxPro.role}</p>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>{t.taxPro.bio1}</p>
              <p>
                With a <strong className="text-foreground">{t.taxPro.bio2strong}</strong>{t.taxPro.bio2}
              </p>
              <p>{t.taxPro.bio3}</p>
            </div>

            <div className="space-y-4">
              {t.taxPro.highlights.map((text, index) => {
                const Icon = highlightIcons[index];
                return (
                  <div key={index} className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border hover:border-gold/50 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-foreground font-medium">{text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxProfessionalSection;
