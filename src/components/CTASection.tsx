import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin, Printer, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { bookingUrl } from "@/lib/booking";

const CTASection = () => {
  const { language, t } = useLanguage();

  return (
    <section id="contact" className="section-padding bg-secondary relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container-width relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">{t.cta.label}</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              {t.cta.heading1} <br />
              {t.cta.heading2} <span className="text-gold">{t.cta.heading3}</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl">{t.cta.description}</p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button variant="gold" size="xl" asChild>
                <a href={bookingUrl("consulting", language)} target="_blank" rel="noopener noreferrer">
                  {t.cta.bookConsultation}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="tel:+15105202707">{t.cta.callUs}</a>
              </Button>
            </div>
          </div>

          <div className="bg-background rounded-2xl p-8 lg:p-10 shadow-xl border border-border">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">{t.cta.contactHeading}</h3>
            <div className="space-y-6">
              <a href="tel:+15105202707" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t.cta.phone}</p>
                  <p className="text-muted-foreground">510-520-2707</p>
                </div>
              </a>
              <a href="mailto:info@netassets.tax" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t.cta.email}</p>
                  <p className="text-muted-foreground">info@netassets.tax</p>
                </div>
              </a>
              <a href="https://maps.google.com/?q=200+Gregory+Ln+Ste+B-201+Pleasant+Hill+CA+94523" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t.cta.location}</p>
                  <p className="text-muted-foreground">200 Gregory Ln Ste B-201<br />Pleasant Hill, CA 94523, USA</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <Printer className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t.cta.faxLabel}</p>
                  <p className="text-muted-foreground">{t.cta.fax}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t.cta.hoursLabel}</p>
                  <p className="text-muted-foreground">{t.cta.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
