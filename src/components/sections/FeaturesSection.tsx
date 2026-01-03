import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, LineChart, Cpu, Shield, Zap, Database } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Based Market Analysis",
    description: "Advanced algorithms that process vast amounts of market data to identify patterns and trends invisible to traditional analysis.",
  },
  {
    icon: LineChart,
    title: "Intelligent Trading Insights",
    description: "Real-time market intelligence that helps traders make data-driven decisions with greater confidence.",
  },
  {
    icon: Cpu,
    title: "Predictive Models",
    description: "Machine learning models trained on historical data to provide forward-looking market perspectives.",
  },
  {
    icon: Database,
    title: "Data Analytics Platform",
    description: "Comprehensive analytics tools that transform raw market data into actionable intelligence.",
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    description: "Ultra-low latency systems that process market information in milliseconds for timely insights.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security protocols protecting your data and trading strategies at all times.",
  },
];

export const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-fluid bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-fluid-lg"
        >
          <span className="inline-block text-accent font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
            Our Solutions
          </span>
          <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold text-foreground mb-4 md:mb-6">
            Technology-Driven <span className="gradient-text">Market Intelligence</span>
          </h2>
          <p className="text-muted-foreground text-fluid-base max-w-2xl mx-auto">
            We build advanced software solutions that empower traders and investors with cutting-edge AI technology.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group p-fluid rounded-xl md:rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-accent/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-accent/20 transition-colors group-hover:scale-110 duration-300">
                <feature.icon className="w-5 h-5 md:w-7 md:h-7 text-accent" />
              </div>
              <h3 className="text-fluid-lg font-semibold text-foreground mb-2 md:mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-fluid-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-muted-foreground/70 text-xs md:text-sm mt-8 md:mt-12 max-w-2xl mx-auto"
        >
          OptAlpha is a technology provider. We do not provide investment advice or brokerage services.
        </motion.p>
      </div>
    </section>
  );
};