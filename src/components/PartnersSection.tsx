import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck } from "lucide-react";

const partners = [
  { name: "USDA Organic", desc: "Certified by the United States Department of Agriculture" },
  { name: "Fair Trade USA", desc: "Ensuring fair wages and ethical sourcing" },
  { name: "Non-GMO Project", desc: "Verified non-genetically modified organisms" },
  { name: "Rainforest Alliance", desc: "Sustainable farming practices certified" },
  { name: "B Corp Certified", desc: "Meeting highest standards of social impact" },
  { name: "Carbon Neutral", desc: "Net-zero carbon footprint verified" },
];

const PartnersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-sm font-body tracking-[0.3em] uppercase text-muted-foreground mb-4"
        >
          Trusted Certifications
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-16"
        >
          Certified Organic Partners
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center gap-3 p-6"
            >
              <ShieldCheck className="w-8 h-8 text-primary" />
              <h3 className="font-display text-lg font-semibold text-foreground">{p.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
