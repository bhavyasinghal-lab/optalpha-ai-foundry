import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Network, Layers, RefreshCw, Lock, Gauge, Cloud } from "lucide-react";
import techPattern from "@/assets/tech-pattern.png";

const techFeatures = [
  {
    icon: Network,
    title: "Neural Network Architecture",
    description: "Deep learning models optimized for financial time-series analysis and pattern recognition.",
  },
  {
    icon: Layers,
    title: "Multi-Layer Processing",
    description: "Hierarchical data processing pipelines that extract insights at multiple levels of abstraction.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Learning",
    description: "Self-improving systems that adapt to changing market conditions and new data patterns.",
  },
  {
    icon: Gauge,
    title: "High-Performance Computing",
    description: "Optimized infrastructure capable of processing millions of data points per second.",
  },
  {
    icon: Lock,
    title: "Secure Infrastructure",
    description: "Enterprise-grade security with end-to-end encryption and comprehensive access controls.",
  },
  {
    icon: Cloud,
    title: "Scalable Cloud Platform",
    description: "Elastic infrastructure that scales seamlessly with demand and data volume.",
  },
];

export const TechnologySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${techPattern})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/98 to-crimson-dark/20" />
      
      {/* Background Effects */}
      <div className="absolute inset-0 neural-grid opacity-15" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-crimson/5 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-crimson-light font-semibold text-sm uppercase tracking-wider mb-4">
            Our Technology
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            AI & Machine Learning at the Core
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Our technology stack is built from the ground up for financial markets, combining cutting-edge AI with robust, scalable infrastructure.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-crimson/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-crimson/20 flex items-center justify-center mb-4 group-hover:bg-crimson/30 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-crimson-light" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Visual Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">
                Data-Driven Decision Engine
              </h3>
              <p className="text-white/70 leading-relaxed">
                Our proprietary algorithms process market data through multiple layers of analysis, from raw data ingestion to actionable insights, all in real-time.
              </p>
            </div>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              {["Data", "Processing", "Analysis", "Insights"].map((step, index) => (
                <motion.div 
                  key={step} 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                >
                  <div className="px-4 py-2 rounded-lg bg-crimson/20 text-crimson-light text-sm font-medium hover:bg-crimson/30 transition-colors cursor-default">
                    {step}
                  </div>
                  {index < 3 && (
                    <div className="w-8 h-0.5 bg-crimson/30 mx-1 hidden sm:block" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};