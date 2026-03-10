import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const protocols = [
  { title: "Soil Testing", desc: "Regular soil composition and purity analysis across all partner farms." },
  { title: "Pesticide-Free Verification", desc: "Third-party lab testing ensures zero synthetic pesticide residues." },
  { title: "Cold-Chain Monitoring", desc: "IoT sensors track temperature at every point in the supply chain." },
  { title: "Traceability Audit", desc: "Blockchain-based tracking from seed to shelf for full accountability." },
  { title: "Nutritional Analysis", desc: "Periodic nutrient density testing to ensure peak quality produce." },
  { title: "Packaging Standards", desc: "100% compostable, BPA-free packaging that preserves freshness." },
];

const QualityAssurance = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-sm font-body tracking-[0.3em] uppercase text-muted-foreground mb-4"
            >
              Our Promise
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6"
            >
              Quality Assurance Protocol
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-muted-foreground leading-relaxed"
            >
              Every product in our supply chain undergoes rigorous quality checks at
              multiple stages, ensuring what reaches your table is nothing short of
              extraordinary.
            </motion.p>
          </div>

          <div className="space-y-4">
            {protocols.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                className="flex gap-4 p-4 rounded-lg hover:bg-background transition-colors duration-300"
              >
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-body text-sm font-semibold text-foreground mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;
