import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import produceImg from "@/assets/produce-spread.jpg";

const posts = [
  {
    title: "The Hidden Cost of Non-Organic Produce",
    excerpt: "Understanding the environmental and health impact of conventional farming practices on your family.",
    category: "Education",
    date: "Mar 2, 2026",
    image: produceImg,
  },
  {
    title: "5 Seasonal Recipes for Spring Vegetables",
    excerpt: "Chef-curated recipes that celebrate the freshest spring harvest from our partner farms.",
    category: "Recipes",
    date: "Feb 18, 2026",
  },
  {
    title: "How We Reduced Food Miles by 60%",
    excerpt: "Our journey to building a hyper-local supply chain that benefits farmers and families alike.",
    category: "Sustainability",
    date: "Feb 5, 2026",
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="blog" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-sm font-body tracking-[0.3em] uppercase text-muted-foreground mb-4"
            >
              From The Field
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-display text-3xl md:text-5xl font-semibold text-foreground"
            >
              Sustainable Living Blog
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            href="#"
            className="flex items-center gap-2 text-sm font-body text-primary hover:text-sage-dark transition-colors tracking-wider uppercase"
          >
            View All <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-card mb-6">
                {post.image ? (
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <div className="w-full h-full bg-sage-gradient" />
                )}
              </div>
              <span className="text-xs font-body tracking-[0.2em] uppercase text-primary font-semibold">{post.category}</span>
              <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{post.excerpt}</p>
              <p className="text-xs text-muted-foreground">{post.date}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
