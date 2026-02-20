import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
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

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-primary pt-16 pb-8">
      <div className="container-width">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
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
            <h4 className="font-serif text-lg font-semibold text-primary-foreground mb-4">{t.footer.followUs}</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label} className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center hover:bg-gold/20 transition-colors group">
                  <social.icon className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">© {currentYear} {t.footer.copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="text-primary-foreground/50 hover:text-gold text-sm transition-colors">{t.footer.privacy}</a>
            <a href="#" className="text-primary-foreground/50 hover:text-gold text-sm transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
