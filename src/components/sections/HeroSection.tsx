import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, TrendingUp, BarChart3, Shield, ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-ai-visual.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
      
      {/* Animated Background Effects */}
      <div className="absolute inset-0 neural-grid opacity-20" />
      
      {/* Animated Orbs - scale with viewport */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[clamp(12rem,25vw,24rem)] h-[clamp(12rem,25vw,24rem)] bg-crimson/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[clamp(10rem,20vw,20rem)] h-[clamp(10rem,20vw,20rem)] bg-crimson-light/10 rounded-full blur-3xl"
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.1, 0.15, 0.1] 
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20 md:pt-24 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/5 border border-white/10 mb-6 md:mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-crimson-light" />
            <span className="text-xs md:text-sm text-white/80">Founded 2021 • AI & ML Focus • Technology-First Approach</span>
          </motion.div>

          {/* Headline - using fluid typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-fluid-4xl md:text-fluid-5xl font-bold text-white leading-tight mb-4 md:mb-6"
          >
            AI-Powered Intelligence for{" "}
            <span className="text-crimson-light">Smarter Trading</span>{" "}
            & Investment Decisions
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-fluid-base md:text-fluid-lg text-white/70 max-w-3xl mx-auto mb-8 md:mb-10 text-balance px-4"
          >
            OptAlpha builds advanced AI & Machine Learning software to help traders and investors analyze markets with clarity and confidence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-12 md:mb-16"
          >
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-crimson-light text-accent-foreground px-6 md:px-8 h-12 md:h-14 text-sm md:text-base font-semibold shadow-lg hover:shadow-xl transition-all group btn-glow">
                Request a Demo
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 px-6 md:px-8 h-12 md:h-14 text-sm md:text-base font-semibold backdrop-blur-sm">
                Contact Us
              </Button>
            </Link>
          </motion.div>

          {/* Key Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto"
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
                whileHover={{ scale: 1.05, y: -4 }}
                className="flex flex-col items-center p-3 md:p-4 rounded-lg md:rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-crimson/30 transition-all duration-300"
              >
                <item.icon className="w-6 h-6 md:w-8 md:h-8 text-crimson-light mb-2 md:mb-3" />
                <span className="text-xs md:text-sm text-white/80 text-center font-medium">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};