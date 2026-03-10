import { motion } from "framer-motion";
import heroImg from "@/assets/hero-farm.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src={heroImg}
          alt="Organic farm at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-primary-foreground/80 font-body text-sm tracking-[0.3em] uppercase mb-6"
        >
          Farm-to-Table Supply Chain
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground max-w-4xl leading-[1.05]"
        >
          From Soil
          <br />
          <span className="italic font-normal">to Soul</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-primary-foreground/70 font-body text-lg md:text-xl max-w-xl mt-8 leading-relaxed"
        >
          Connecting conscious families with certified organic farms through a
          transparent, sustainable supply chain.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-10 flex gap-4"
        >
          <a
            href="#order-now"
            data-cursor-fresh
            className="group relative px-8 py-4 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            Start Your Order
          </a>
          <a
            href="#our-journey"
            data-cursor-fresh
            className="px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-body text-sm tracking-widest uppercase hover:bg-primary-foreground/10 transition-all duration-300"
          >
            Our Story
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-primary-foreground/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
