import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Target, Zap, Shield, TrendingUp, Brain, Users } from "lucide-react";

const mainBenefits = [
  {
    icon: Brain,
    title: "AI-First Architecture",
    description: "Built from the ground up with artificial intelligence at its core, not bolted on as an afterthought.",
  },
  {
    icon: Target,
    title: "Purpose-Built for Markets",
    description: "Every component is designed specifically for the unique demands of financial data processing.",
  },
  {
    icon: Zap,
    title: "Real-Time Performance",
    description: "Sub-millisecond latency ensures you're always working with the most current market information.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and security protocols protect your data and strategies.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Innovation",
    description: "Our research team constantly improves our models and introduces new capabilities.",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Dedicated team of specialists ready to help you maximize value from our platform.",
  },
];

const comparisonPoints = [
  "Advanced AI algorithms vs. traditional technical indicators",
  "Real-time pattern recognition vs. delayed analysis",
  "Adaptive models vs. static rule-based systems",
  "Multi-dimensional data processing vs. single-source analysis",
  "Continuous learning vs. periodic updates",
  "Institutional-grade tools vs. retail-focused platforms",
];

const WhyOptAlpha = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 neural-grid opacity-30" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block text-teal-light font-semibold text-sm uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              The OptAlpha Advantage
            </h1>
            <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto">
              In a world of information overload, OptAlpha provides clarity. Our AI-powered platform cuts through the noise to deliver insights that matter.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Main Benefits Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Sets Us <span className="gradient-text">Apart</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              OptAlpha combines cutting-edge technology with deep market expertise to deliver unmatched analytical capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300 card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                The Difference
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Modern AI vs. Traditional Methods
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                OptAlpha represents a fundamental shift in how market analysis is performed. Our AI-driven approach offers capabilities that traditional methods simply cannot match.
              </p>
              
              <ul className="space-y-4">
                {comparisonPoints.map((point, index) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-3xl bg-card border border-border shadow-lg"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Built for Data-Driven Traders
              </h3>
              <div className="space-y-6">
                {[
                  { metric: "Processing Speed", value: "< 1ms", desc: "Real-time analysis" },
                  { metric: "Data Sources", value: "Multiple", desc: "Comprehensive coverage" },
                  { metric: "Model Updates", value: "Continuous", desc: "Always improving" },
                  { metric: "Security", value: "Enterprise", desc: "Bank-grade protection" },
                ].map((item) => (
                  <div key={item.metric} className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                    <div>
                      <div className="font-medium text-foreground">{item.metric}</div>
                      <div className="text-muted-foreground text-sm">{item.desc}</div>
                    </div>
                    <div className="text-accent font-bold text-lg">{item.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join traders and investors who have elevated their analysis with OptAlpha's AI-powered technology.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-teal-light text-accent-foreground group">
                  Request a Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/solutions">
                <Button size="lg" variant="outline">
                  Explore Solutions
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyOptAlpha;
