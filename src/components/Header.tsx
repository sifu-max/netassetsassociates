import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-gold/20">
      <div className="container-width">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="Net Assets & Associates" className="h-12 w-auto" />
            <div className="hidden sm:block">
              <span className="font-serif text-xl font-semibold text-primary-foreground">NET ASSETS</span>
              <span className="text-gold text-xs block -mt-1 tracking-wider">& ASSOCIATES</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-primary-foreground/80 hover:text-gold transition-colors font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+15105202707" className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">510-520-2707</span>
            </a>
            <Button variant="gold" size="default" asChild>
              <a href="https://www.netassets.llc/en/booking-calendar/business-consulting" target="_blank" rel="noopener noreferrer">Book Now</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gold/20">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-primary-foreground/80 hover:text-gold transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="gold" size="lg" className="mt-4" asChild>
                <a href="https://www.netassets.llc/en/booking-calendar/business-consulting" target="_blank" rel="noopener noreferrer">Book Now</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
