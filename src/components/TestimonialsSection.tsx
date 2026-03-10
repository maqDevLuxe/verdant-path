import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jessica Lin",
    role: "Nutritionist & Mom of 3",
    text: "The freshness is unmatched. My kids can actually taste the difference, and knowing exactly which farm our food comes from gives me peace of mind.",
    rating: 5,
  },
  {
    name: "Dr. Michael Torres",
    role: "Integrative Medicine Physician",
    text: "I recommend Verdana to all my patients. The nutrient density of their produce is consistently superior to anything you'll find at a conventional grocery store.",
    rating: 5,
  },
  {
    name: "Aisha Patel",
    role: "Plant-Based Chef",
    text: "As a chef, ingredients are everything. Verdana's seasonal boxes inspire my menu and the quality speaks for itself in every dish I create.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-sm font-body tracking-[0.3em] uppercase text-muted-foreground mb-4"
          >
            Real Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-semibold text-foreground"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 font-body text-sm">"{t.text}"</p>
              <div>
                <p className="font-display font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
