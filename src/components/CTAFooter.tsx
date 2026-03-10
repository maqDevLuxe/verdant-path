import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Instagram, Facebook, Twitter, Mail } from "lucide-react";

const CTAFooter = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      {/* CTA Section */}
      <section ref={ref} id="order-now" className="section-padding bg-sage-gradient">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-sm font-body tracking-[0.3em] uppercase text-sage-dark/60 mb-4"
          >
            Begin Your Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6"
          >
            Start Your
            <br />
            <span className="italic font-normal">Organic Order</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto"
          >
            Join thousands of health-conscious families who trust Verdana for the
            freshest, certified organic produce delivered directly from farm to table.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#"
              data-cursor-fresh
              className="px-10 py-4 bg-foreground text-background font-body text-sm tracking-widest uppercase hover:scale-105 transition-transform duration-300 inline-block"
            >
              Order Fresh Box
            </a>
            <a
              href="#"
              data-cursor-fresh
              className="px-10 py-4 border border-foreground/20 text-foreground font-body text-sm tracking-widest uppercase hover:bg-foreground/5 transition-all duration-300 inline-block"
            >
              View Weekly Menu
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <a href="#" className="flex items-center gap-2 font-display text-xl font-semibold text-background mb-4">
                <Leaf className="w-5 h-5 text-primary" />
                Verdana
              </a>
              <p className="text-sm text-background/50 leading-relaxed">
                Connecting conscious families with certified organic farms since 2018.
              </p>
            </div>

            <div>
              <h4 className="font-body text-xs tracking-[0.2em] uppercase text-background/40 mb-4">Company</h4>
              <div className="space-y-3">
                {["Our Story", "Partner Farms", "Sustainability", "Careers"].map((l) => (
                  <a key={l} href="#" className="block text-sm text-background/60 hover:text-background transition-colors">{l}</a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-body text-xs tracking-[0.2em] uppercase text-background/40 mb-4">Support</h4>
              <div className="space-y-3">
                {["FAQ", "Delivery Areas", "Returns Policy", "Contact Us"].map((l) => (
                  <a key={l} href="#" className="block text-sm text-background/60 hover:text-background transition-colors">{l}</a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-body text-xs tracking-[0.2em] uppercase text-background/40 mb-4">Newsletter</h4>
              <p className="text-sm text-background/50 mb-4">Weekly recipes & seasonal harvest updates.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 bg-background/10 text-background text-sm border border-background/10 focus:outline-none focus:border-primary placeholder:text-background/30"
                />
                <button className="px-4 py-3 bg-primary text-primary-foreground text-sm font-body tracking-wider uppercase">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-background/40">© 2026 Verdana Organic Supply Chain. All rights reserved.</p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="text-background/40 hover:text-background transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CTAFooter;
