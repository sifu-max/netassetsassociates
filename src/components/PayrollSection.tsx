import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

const PayrollSection = () => {
  const { t } = useLanguage();

  return (
    <section id="payroll" className="section-padding bg-background">
      <div className="container-width max-w-4xl">
        <span className="text-gold font-semibold text-sm tracking-wider uppercase">{t.payroll.label}</span>
        <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">{t.payroll.heading}</h2>
        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
          <p>{t.payroll.owner}</p>
          <p>{t.payroll.employees}</p>
          <p>{t.payroll.ask}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button variant="gold" size="lg" asChild>
            <a href="tel:+15105202707">
              <Phone className="w-5 h-5" />
              {t.payroll.call}
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="mailto:info@netassets.tax">
              <Mail className="w-5 h-5" />
              {t.payroll.email}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PayrollSection;
