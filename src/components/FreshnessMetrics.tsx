import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Thermometer, Leaf, Zap } from "lucide-react";

const metrics = [
  { icon: Clock, value: "< 24h", label: "Harvest to Home", desc: "Average delivery time from farm picking" },
  { icon: Thermometer, value: "2–4°C", label: "Cold Chain Temp", desc: "Maintained throughout transport" },
  { icon: Leaf, value: "100%", label: "Organic Certified", desc: "Every product verified organic" },
  { icon: Zap, value: "3×", label: "Fresher Than Store", desc: "Compared to typical grocery produce" },
];

const FreshnessMetrics = () => {
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
            Measured Freshness
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-semibold text-foreground"
          >
            Freshness You Can Measure
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="bg-card border border-border rounded-xl p-6 md:p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <m.icon className="w-6 h-6 text-primary mx-auto mb-4" />
              <p className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">{m.value}</p>
              <p className="font-body text-sm font-semibold text-foreground mb-1">{m.label}</p>
              <p className="text-xs text-muted-foreground">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreshnessMetrics;
