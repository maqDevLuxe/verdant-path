import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sprout, Truck, Home, Package } from "lucide-react";

const steps = [
  { icon: Sprout, title: "Harvest", desc: "Hand-picked at peak ripeness from our certified organic farms at dawn." },
  { icon: Package, title: "Quality Check", desc: "Every item inspected and graded to meet our premium organic standards." },
  { icon: Truck, title: "Cold-Chain Delivery", desc: "Temperature-controlled transport preserves nutrients and freshness." },
  { icon: Home, title: "Your Table", desc: "Delivered to your door within 24 hours of harvest, guaranteed fresh." },
];

const JourneySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="our-journey" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-sm font-body tracking-[0.3em] uppercase text-muted-foreground mb-4"
          >
            The Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-semibold text-foreground"
          >
            Our Farm-to-Fork Journey
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-sage-gradient flex items-center justify-center relative z-10">
                  <step.icon className="w-7 h-7 text-sage-dark" />
                </div>
                <span className="text-xs font-body tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                  Step {i + 1}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
