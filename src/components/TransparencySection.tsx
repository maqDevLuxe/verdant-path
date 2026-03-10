import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

const farms = [
  { name: "Green Valley Farm", location: "Napa Valley, CA", top: "25%", left: "12%" },
  { name: "Sunrise Organics", location: "Portland, OR", top: "15%", left: "14%" },
  { name: "Prairie Wind Farm", location: "Iowa City, IA", top: "30%", left: "45%" },
  { name: "Blue Ridge Harvest", location: "Asheville, NC", top: "45%", left: "70%" },
  { name: "Coastal Greens", location: "Monterey, CA", top: "40%", left: "10%" },
  { name: "Heritage Acres", location: "Hudson Valley, NY", top: "22%", left: "78%" },
];

const TransparencySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="transparency" className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-sm font-body tracking-[0.3em] uppercase text-muted-foreground mb-4"
          >
            Full Visibility
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display text-3xl md:text-5xl font-semibold text-foreground"
          >
            Supply Chain Transparency
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative bg-sage-gradient rounded-2xl p-8 md:p-12 aspect-[16/9] md:aspect-[2/1]"
        >
          {/* Simplified US map shape using dots */}
          <div className="absolute inset-8 md:inset-12">
            {farms.map((farm, i) => (
              <motion.div
                key={farm.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}
                className="absolute group cursor-pointer"
                style={{ top: farm.top, left: farm.left }}
              >
                <div className="relative">
                  <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
                  <div className="absolute -top-1 -left-1 w-6 h-6 bg-primary/20 rounded-full" />
                  <div className="absolute left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background shadow-lg rounded-lg p-3 whitespace-nowrap z-20">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-primary" />
                      <p className="font-display text-sm font-semibold text-foreground">{farm.name}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{farm.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="absolute bottom-6 left-8 md:left-12">
            <p className="text-xs font-body tracking-[0.2em] uppercase text-sage-dark/60">
              Interactive Farm Map • Hover to explore
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TransparencySection;
