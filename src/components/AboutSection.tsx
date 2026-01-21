import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, Heart } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Users, value: "1000+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Heart, value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">About Us</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              About Our Firm
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              <strong className="text-foreground">NET ASSETS & ASSOCIATES LLC</strong> is a dedicated 
              accounting firm, founded and operated by a team with a strong commitment to diversity 
              and serving diverse communities.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We specialize in offering tax services for small businesses and individuals, along 
              with expert business advice. Our firm has built a solid reputation within the local 
              community, primarily through positive word of mouth.
            </p>

            <Button variant="gold" size="lg">
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Right Stats */}
          <div className="grid gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="flex items-center gap-6 p-6 bg-secondary rounded-2xl border border-border hover:border-gold/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="font-serif text-4xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
