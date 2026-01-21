import { Building2, User, TrendingUp } from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    {
      icon: Building2,
      title: "Small Business Taxes",
      description: "We address the specific financial needs of small businesses, offering customized tax services and expert advice to support their growth and financial stability.",
    },
    {
      icon: User,
      title: "Personal Taxes",
      description: "Our personalized approach to personal tax services ensures that individuals receive accurate guidance and assistance to effectively manage their tax obligations.",
    },
    {
      icon: TrendingUp,
      title: "Business Consulting",
      description: "Strategic business consulting services to help entrepreneurs and business owners make informed decisions and achieve sustainable growth.",
    },
  ];

  return (
    <section className="section-padding bg-primary">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-wider uppercase">Expertise</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary-foreground mt-3 mb-4">
            Industries We Serve
          </h2>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className="text-center p-8 rounded-2xl bg-navy-light/30 border border-gold/20 hover:border-gold/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mb-6">
                <industry.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-4">
                {industry.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
