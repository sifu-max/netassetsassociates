import { GraduationCap, Heart, Users } from "lucide-react";
import lenningImg from "@/assets/lenning.jpeg";

const TaxProfessionalSection = () => {
  const highlights = [
    { icon: GraduationCap, text: "Master's Degree in Finance & Accounting from Cal State East Bay" },
    { icon: Heart, text: "Passionate about serving and empowering his community" },
    { icon: Users, text: "Guided by strong personal, religious, and core values" },
  ];

  return (
    <section id="professional" className="section-padding bg-secondary">
      <div className="container-width">
        <div className="text-center mb-12">
          <span className="text-gold font-semibold text-sm tracking-wider uppercase">Your Partner</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Meet Your Tax Professional
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={lenningImg}
                alt="Lenning - Tax Professional"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-gold to-gold-light rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border-4 border-gold rounded-xl -z-10" />
          </div>

          {/* Bio Content */}
          <div>
            <h3 className="font-serif text-3xl font-bold text-foreground mb-4">
              Lenning
            </h3>
            <p className="text-gold font-semibold text-lg mb-6">
              Founder & Lead Tax Professional
            </p>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>
                After migrating from El Salvador in pursuit of opportunity, Lenning quickly 
                recognized the unique challenges faced by Americans and, in particular, Latino 
                immigrants navigating the complexities of the U.S. financial system.
              </p>
              <p>
                With a <strong className="text-foreground">Master's degree in Finance and Accounting 
                from California State University, East Bay</strong>, he brings both academic excellence 
                and real-world understanding to every client interaction.
              </p>
              <p>
                Lenning lives by strict personal, religious, and core values that shape his unique 
                character and approach to delivering solutions and services. His passion for helping 
                his community drives everything he does at Net Assets & Associates.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border hover:border-gold/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxProfessionalSection;
