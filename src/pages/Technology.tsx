import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Network, Layers, RefreshCw, Lock, Gauge, Cloud, ArrowRight, Cpu, Database } from "lucide-react";

const techStack = [
  {
    icon: Network,
    title: "Neural Network Architecture",
    description: "Deep learning models specifically optimized for financial time-series analysis and pattern recognition across multiple asset classes.",
  },
  {
    icon: Layers,
    title: "Multi-Layer Processing",
    description: "Hierarchical data processing pipelines that extract insights at multiple levels of abstraction, from raw ticks to strategic signals.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Learning Systems",
    description: "Self-improving algorithms that adapt to changing market conditions and incorporate new data patterns automatically.",
  },
  {
    icon: Gauge,
    title: "High-Performance Computing",
    description: "Optimized infrastructure capable of processing millions of data points per second with sub-millisecond latency.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-grade security protocols with end-to-end encryption, comprehensive access controls, and audit logging.",
  },
  {
    icon: Cloud,
    title: "Scalable Cloud Platform",
    description: "Elastic cloud infrastructure that scales seamlessly with demand, ensuring consistent performance at any volume.",
  },
];

const Technology = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 neural-grid opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-teal/10 rounded-full blur-3xl animate-pulse-slow" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block text-teal-light font-semibold text-sm uppercase tracking-wider mb-4">
              Technology
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              AI & Machine Learning at the Core
            </h1>
            <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto">
              Our technology stack is purpose-built for financial markets, combining cutting-edge AI research with battle-tested infrastructure.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Tech Stack Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Our Stack
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built for Financial Markets
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every component is designed with the unique demands of financial data processing in mind.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300 card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <tech.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {tech.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
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
                Architecture
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Data-Driven Decision Engine
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Our proprietary algorithms process market data through multiple layers of analysis, from raw data ingestion to actionable insights, all in real-time.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Data Ingestion", desc: "Real-time market data feeds from multiple sources" },
                  { label: "Processing Layer", desc: "Normalization, cleaning, and feature extraction" },
                  { label: "AI Analysis", desc: "Neural network inference and pattern detection" },
                  { label: "Insight Delivery", desc: "Actionable outputs via dashboard and API" },
                ].map((step, index) => (
                  <div key={step.label} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{step.label}</h4>
                      <p className="text-muted-foreground text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-3xl bg-card border border-border"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                  <div className="flex items-center gap-3">
                    <Database className="w-5 h-5 text-accent" />
                    <span className="font-medium text-foreground">Data Sources</span>
                  </div>
                  <span className="text-muted-foreground text-sm">Multiple Feeds</span>
                </div>
                <div className="flex justify-center">
                  <div className="w-0.5 h-8 bg-border" />
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                  <div className="flex items-center gap-3">
                    <Cpu className="w-5 h-5 text-accent" />
                    <span className="font-medium text-foreground">Processing Engine</span>
                  </div>
                  <span className="text-muted-foreground text-sm">&lt; 1ms Latency</span>
                </div>
                <div className="flex justify-center">
                  <div className="w-0.5 h-8 bg-border" />
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                  <div className="flex items-center gap-3">
                    <Network className="w-5 h-5 text-accent" />
                    <span className="font-medium text-foreground">AI Models</span>
                  </div>
                  <span className="text-muted-foreground text-sm">Deep Learning</span>
                </div>
                <div className="flex justify-center">
                  <div className="w-0.5 h-8 bg-border" />
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-accent/10 border border-accent/20">
                  <div className="flex items-center gap-3">
                    <Gauge className="w-5 h-5 text-accent" />
                    <span className="font-medium text-foreground">Insights</span>
                  </div>
                  <span className="text-accent text-sm font-medium">Real-Time</span>
                </div>
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
              Experience Our Technology
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              See how OptAlpha's AI-powered platform can transform your market analysis workflow.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-teal-light text-accent-foreground group">
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Technology;
