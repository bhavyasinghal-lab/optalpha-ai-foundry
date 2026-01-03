import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, TrendingUp, BarChart3, Shield, ArrowRight, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Background Effects */}
      <div className="absolute inset-0 neural-grid opacity-30" />
      <div className="absolute inset-0 gradient-mesh" />
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-electric/10 rounded-full blur-3xl animate-float" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-teal-light" />
            <span className="text-sm text-primary-foreground/90">Founded 2021 • AI & ML Focus • Technology-First Approach</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6"
          >
            AI-Powered Intelligence for{" "}
            <span className="text-teal-light">Smarter Trading</span>{" "}
            & Investment Decisions
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/70 max-w-3xl mx-auto mb-10 text-balance"
          >
            OptAlpha builds advanced AI & Machine Learning software to help traders and investors analyze markets with clarity and confidence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-teal-light text-accent-foreground px-8 h-14 text-base font-semibold shadow-lg hover:shadow-xl transition-all group">
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 h-14 text-base font-semibold">
                Contact Us
              </Button>
            </Link>
          </motion.div>

          {/* Key Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: Brain, label: "AI-Driven Analytics" },
              { icon: TrendingUp, label: "Machine Learning Models" },
              { icon: BarChart3, label: "Market Intelligence Tools" },
              { icon: Shield, label: "Research-Backed Technology" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="flex flex-col items-center p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm"
              >
                <item.icon className="w-8 h-8 text-teal-light mb-3" />
                <span className="text-sm text-primary-foreground/80 text-center font-medium">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
