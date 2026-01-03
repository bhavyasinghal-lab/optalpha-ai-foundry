import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Award, Lightbulb } from "lucide-react";

const stats = [
  { value: "2021", label: "Founded" },
  { value: "AI/ML", label: "Core Focus" },
  { value: "Delhi", label: "Headquarters" },
  { value: "Global", label: "Market Coverage" },
];

const values = [
  {
    icon: Target,
    title: "Research-Driven",
    description: "Every solution we build is grounded in rigorous research and validated methodologies.",
  },
  {
    icon: Lightbulb,
    title: "Innovation-First",
    description: "We continuously push the boundaries of what's possible with AI and machine learning.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Built by data scientists, engineers, and market experts with deep domain knowledge.",
  },
  {
    icon: Award,
    title: "Quality Focus",
    description: "We maintain the highest standards in code quality, security, and system reliability.",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 neural-grid opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              About OptAlpha
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Building the Future of{" "}
              <span className="gradient-text">Financial Technology</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Founded in 2021 and headquartered in Delhi, India, OptAlpha is an AI & Machine Learning–driven investment technology company focused on building advanced software solutions for trading and investment analytics.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our mission is to enhance trading and investment decision-making using advanced AI and machine learning technologies, empowering market participants with tools that were previously only available to large institutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-card border border-border"
                >
                  <div className="text-2xl font-bold text-accent mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
