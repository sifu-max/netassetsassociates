import { Quote, Star } from "lucide-react";
import latinoSatisfactionImg from "@/assets/latino-satisfaction.jpg";
import { useLanguage } from "@/context/LanguageContext";

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const testimonials = t.testimonials.items;

  return (
    <section id="testimonials" className="section-padding bg-secondary">
      <div className="container-width">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-wider uppercase">{t.testimonials.label}</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">{t.testimonials.heading}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.testimonials.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={latinoSatisfactionImg} alt="Satisfied Latino family celebrating financial success" className="w-full h-auto object-cover aspect-[4/4]" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-gold to-gold-light rounded-2xl -z-10" />
            <div className="absolute -top-4 -right-4 w-16 h-16 border-4 border-gold rounded-xl -z-10" />
          </div>

          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.author} className="relative bg-background rounded-2xl p-6 shadow-lg border border-border hover:border-gold/50 transition-all duration-300 hover:-translate-y-1" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="absolute -top-3 left-6">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shadow-lg">
                    <Quote className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <div className="flex gap-1 mb-3 pt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-4 leading-relaxed italic text-sm">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-navy-light flex items-center justify-center">
                    <span className="font-serif font-bold text-primary-foreground">{testimonial.author[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
