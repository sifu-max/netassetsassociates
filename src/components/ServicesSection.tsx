import { Button } from "@/components/ui/button";
import { Briefcase, Calculator, User, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Business Consultancy",
      description: "Expert advice to support your business growth and strategic planning needs.",
      link: "#book-business",
    },
    {
      icon: Calculator,
      title: "Small Business Taxes",
      description: "Customized tax services for small businesses, ensuring compliance and maximum returns.",
      link: "#book-small-business",
    },
    {
      icon: User,
      title: "Personal Taxes",
      description: "Personalized tax preparation for individuals with accurate guidance and support.",
      link: "#book-personal",
    },
  ];

  return (
    <section id="services" className="section-padding bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-gold rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-gold rounded-full" />
      </div>

      <div className="container-width relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-wider uppercase">What We Offer</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary-foreground mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Comprehensive financial solutions tailored to your unique needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-navy-light/50 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-primary-foreground/70 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* CTA */}
              <Button variant="hero-outline" size="default" className="group/btn">
                Book Now
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
