import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const quickLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#services", label: t.nav.services },
    { href: "#about", label: t.nav.about },
    { href: "#testimonials", label: t.nav.testimonials },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="bg-primary pt-16 pb-8">
      <div className="container-width">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                <span className="font-serif font-bold text-primary text-xl">N</span>
              </div>
              <div>
                <span className="font-serif text-xl font-semibold text-primary-foreground">NET ASSETS</span>
                <span className="text-gold text-xs block -mt-1 tracking-wider">& ASSOCIATES</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">{t.footer.brandDesc}</p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-primary-foreground mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-primary-foreground mb-4">{t.footer.services}</h4>
            <ul className="space-y-2">
              {t.footer.servicesList.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-primary-foreground mb-4">{t.cta.hoursLabel}</h4>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">{t.cta.hours}</p>
            <p className="text-primary-foreground/70 text-sm mt-3">{t.cta.faxLabel}: {t.cta.fax}</p>
          </div>
        </div>

        <div className="border-t border-gold/20 pt-8">
          <p className="text-primary-foreground/50 text-sm">© {currentYear} {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
