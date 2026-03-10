import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const seasons = [
  {
    name: "Spring",
    months: "Mar – May",
    produce: ["Asparagus", "Peas", "Strawberries", "Radishes", "Artichokes", "Spinach"],
    color: "bg-primary/10 text-sage-dark",
  },
  {
    name: "Summer",
    months: "Jun – Aug",
    produce: ["Tomatoes", "Corn", "Peaches", "Zucchini", "Blueberries", "Peppers"],
    color: "bg-accent/10 text-accent",
  },
  {
    name: "Autumn",
    months: "Sep – Nov",
    produce: ["Pumpkins", "Apples", "Squash", "Brussels Sprouts", "Cranberries", "Sweet Potatoes"],
    color: "bg-earth/10 text-earth",
  },
  {
    name: "Winter",
    months: "Dec – Feb",
    produce: ["Kale", "Citrus", "Root Vegetables", "Cabbage", "Leeks", "Turnips"],
    color: "bg-muted text-muted-foreground",
  },
];

const SeasonalCalendar = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  return (
    <section ref={ref} className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-sm font-body tracking-[0.3em] uppercase text-muted-foreground mb-4"
          >
            Eat With The Seasons
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-semibold text-foreground"
          >
            Seasonal Harvest Calendar
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex justify-center gap-2 md:gap-4 mb-12">
            {seasons.map((s, i) => (
              <button
                key={s.name}
                onClick={() => setActive(i)}
                className={`px-4 md:px-8 py-3 font-body text-sm tracking-wider uppercase transition-all duration-300 border ${
                  active === i
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary/50"
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <p className="text-muted-foreground font-body mb-8">{seasons[active].months}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {seasons[active].produce.map((item) => (
                <span
                  key={item}
                  className={`px-5 py-2.5 rounded-full font-body text-sm ${seasons[active].color} transition-all duration-300`}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SeasonalCalendar;
