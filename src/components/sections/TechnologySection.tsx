import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Network, Layers, RefreshCw, Lock, Gauge, Cloud } from "lucide-react";

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
    <section ref={ref} className="py-24 gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 neural-grid opacity-20" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal/5 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-teal-light font-semibold text-sm uppercase tracking-wider mb-4">
            Our Technology
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            AI & Machine Learning at the Core
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
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
              className="group p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-teal/20 flex items-center justify-center mb-4 group-hover:bg-teal/30 transition-colors">
                <feature.icon className="w-6 h-6 text-teal-light" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Visual Diagram Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-8 rounded-3xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Data-Driven Decision Engine
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                Our proprietary algorithms process market data through multiple layers of analysis, from raw data ingestion to actionable insights, all in real-time.
              </p>
            </div>
            <div className="flex items-center gap-4">
              {["Data", "Processing", "Analysis", "Insights"].map((step, index) => (
                <div key={step} className="flex items-center">
                  <div className="px-4 py-2 rounded-lg bg-teal/20 text-teal-light text-sm font-medium">
                    {step}
                  </div>
                  {index < 3 && (
                    <div className="w-8 h-0.5 bg-teal/30 mx-1" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
