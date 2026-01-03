import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, LineChart, Cpu, Database, Zap, Shield, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Brain,
    title: "AI-Based Market Analysis",
    description: "Our advanced AI algorithms process vast amounts of market data in real-time, identifying patterns and trends that are invisible to traditional analysis methods.",
    features: [
      "Pattern recognition across multiple timeframes",
      "Sentiment analysis from market data",
      "Anomaly detection systems",
      "Trend identification algorithms",
    ],
  },
  {
    icon: LineChart,
    title: "Intelligent Trading Insights",
    description: "Transform raw market data into actionable intelligence with our suite of analytical tools designed specifically for active traders.",
    features: [
      "Real-time market signals",
      "Multi-asset correlation analysis",
      "Volume and liquidity metrics",
      "Custom alert systems",
    ],
  },
  {
    icon: Cpu,
    title: "Predictive Models & Analytics",
    description: "Machine learning models trained on historical data to provide forward-looking market perspectives and probability assessments.",
    features: [
      "Statistical forecasting models",
      "Risk assessment frameworks",
      "Scenario analysis tools",
      "Backtesting infrastructure",
    ],
  },
  {
    icon: Database,
    title: "Investment Intelligence Tools",
    description: "Comprehensive analytics platform that aggregates, processes, and visualizes market data for strategic decision-making.",
    features: [
      "Portfolio analytics dashboard",
      "Custom data visualization",
      "Report generation",
      "API integrations",
    ],
  },
];

const Solutions = () => {
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
              Our Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Technology-Driven Market Intelligence
            </h1>
            <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto">
              Comprehensive AI and machine learning solutions designed to empower traders and investors with cutting-edge analytical capabilities.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                    <solution.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {solution.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <ul className="space-y-3">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`p-8 rounded-3xl bg-muted/50 border border-border ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}>
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                    <solution.icon className="w-24 h-24 text-accent/30" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built for Performance & Security
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every solution is engineered with enterprise-grade security and optimized for high-performance computing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Ultra-Low Latency", description: "Real-time processing measured in milliseconds" },
              { icon: Shield, title: "Enterprise Security", description: "Bank-grade encryption and access controls" },
              { icon: Database, title: "Scalable Infrastructure", description: "Cloud-native architecture that grows with you" },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer & CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-muted-foreground/70 text-sm mb-8 p-4 rounded-lg bg-muted/50 border border-border">
              <strong>Important:</strong> OptAlpha is a technology provider. We do not provide investment advice, brokerage services, or financial recommendations. Our tools are designed to assist with analysis and should not be considered as trading signals or investment guidance.
            </p>
            
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Discover how OptAlpha's technology can enhance your market analysis capabilities.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-teal-light text-accent-foreground group">
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
