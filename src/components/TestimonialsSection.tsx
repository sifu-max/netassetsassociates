import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "The best experience, very well explained, it is my first time doing the taxes and Lenin explained every detail to me. Thank you for your attention and patience in explaining. I hope GOD blesses you greatly. Thank you very much.",
      author: "Ashly Zelaya",
      role: "Personal Tax Client",
    },
    {
      quote: "My family had an amazing experience with Net Assets & Assoc! The customer service was top-notch, and the tax services, knowledge and expertise exceeded our expectations. I highly recommend Lenin and his team to anyone looking for a trustworthy, reliable tax preparer.",
      author: "John Rodriguez",
      role: "Small Business Owner",
    },
    {
      quote: "NET ASSETS & ASSOCIATES truly understands the needs of the Hispanic community. Their dedication to serving us has made them a trusted partner for all of our financial needs.",
      author: "Raul Solis",
      role: "Business Consultant Client",
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-secondary">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-wider uppercase">What Clients Say</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Testimonials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="relative bg-background rounded-2xl p-8 shadow-lg border border-border hover:border-gold/50 transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shadow-lg">
                  <Quote className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 pt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-navy-light flex items-center justify-center">
                  <span className="font-serif font-bold text-primary-foreground text-lg">
                    {testimonial.author[0]}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
