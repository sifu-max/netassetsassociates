import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const statIcons = [Users, Award, Heart];

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">{t.about.label}</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">{t.about.heading}</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              <strong className="text-foreground">NET ASSETS & ASSOCIATES LLC</strong> {t.about.p1}
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{t.about.p2}</p>
            <Button variant="gold" size="lg" asChild>
              <a href="#professional">
                {t.about.learnMore}
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          <div className="grid gap-6">
            {t.about.stats.map((stat, index) => {
              const Icon = statIcons[index];
              return (
                <div
                  key={index}
                  className="flex items-center gap-6 p-6 bg-secondary rounded-2xl border border-border hover:border-gold/50 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-serif text-4xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-muted-foreground font-medium">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
