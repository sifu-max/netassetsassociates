import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container-width relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - CTA */}
          <div className="text-center lg:text-left">
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">Get Started</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Ready to Take Control <br />
              of Your <span className="text-gold">Finances?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl">
              Schedule a consultation with our expert team today and discover how we can help 
              you achieve your financial goals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button variant="gold" size="xl">
                Book Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl">
                Call Us Now
              </Button>
            </div>
          </div>

          {/* Right - Contact Info */}
          <div className="bg-background rounded-2xl p-8 lg:p-10 shadow-xl border border-border">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <a href="tel:+1234567890" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p className="text-muted-foreground">(123) 456-7890</p>
                </div>
              </a>

              <a href="mailto:info@netassets.llc" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground">info@netassets.llc</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p className="text-muted-foreground">123 Business Ave, Suite 100<br />Houston, TX 77001</p>
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
