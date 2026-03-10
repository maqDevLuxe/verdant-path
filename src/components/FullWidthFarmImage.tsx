import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import farmPanorama from "@/assets/farm-panorama.jpg";

const FullWidthFarmImage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src={farmPanorama}
          alt="Vibrant organic farm panorama"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-foreground/10" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground text-center px-6 max-w-3xl leading-tight"
        >
          Where Nature Meets
          <br />
          <span className="italic font-normal">Nourishment</span>
        </motion.p>
      </div>
    </section>
  );
};

export default FullWidthFarmImage;
