import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 12500, suffix: "+", label: "Tons Delivered Annually" },
  { value: 45000, suffix: "+", label: "Happy Families Served" },
  { value: 120, suffix: "", label: "Partner Organic Farms" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
];

const AnimatedCounter = ({ target, inView, suffix }: { target: number; inView: boolean; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatCounters = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                <AnimatedCounter target={stat.value} inView={inView} suffix={stat.suffix} />
              </p>
              <p className="font-body text-sm text-primary-foreground/60 tracking-wider uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatCounters;
