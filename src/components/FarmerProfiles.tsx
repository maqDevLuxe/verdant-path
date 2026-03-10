import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import farmer1 from "@/assets/farmer-portrait-1.jpg";
import farmer2 from "@/assets/farmer-portrait-2.jpg";

const farmers = [
  {
    name: "Maria Gonzalez",
    farm: "Green Valley Farm",
    location: "Napa Valley, CA",
    specialty: "Heritage Tomatoes & Leafy Greens",
    years: 18,
    image: farmer1,
    quote: "Every seed we plant is a promise to the families we feed.",
  },
  {
    name: "Sarah Mitchell",
    farm: "Sunrise Organics",
    location: "Portland, OR",
    specialty: "Berries & Stone Fruits",
    years: 12,
    image: farmer2,
    quote: "Organic farming isn't just a method — it's a way of life.",
  },
];

const FarmerProfiles = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="farmers" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-sm font-body tracking-[0.3em] uppercase text-muted-foreground mb-4"
          >
            Meet The Growers
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-semibold text-foreground"
          >
            Direct-from-Farmer Profiles
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {farmers.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.7 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-shadow duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={f.image}
                  alt={f.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <p className="text-sm text-primary font-body font-semibold tracking-wider uppercase mb-1">{f.farm}</p>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">{f.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {f.location} • {f.years} years of organic farming
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  <span className="font-semibold text-foreground">Specialty:</span> {f.specialty}
                </p>
                <blockquote className="font-display italic text-foreground/80 border-l-2 border-primary pl-4">
                  "{f.quote}"
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FarmerProfiles;
