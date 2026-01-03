import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Target, Users, Award, Lightbulb, MapPin, Calendar, Briefcase } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Research-Driven",
    description: "Every solution we build is grounded in rigorous research and validated methodologies from leading academic institutions and industry experts.",
  },
  {
    icon: Lightbulb,
    title: "Innovation-First",
    description: "We continuously push the boundaries of what's possible with AI and machine learning, staying at the forefront of technological advancement.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Built by data scientists, engineers, and market experts with deep domain knowledge in both technology and financial markets.",
  },
  {
    icon: Award,
    title: "Quality Focus",
    description: "We maintain the highest standards in code quality, security, and system reliability, ensuring our clients can depend on our solutions.",
  },
];

const About = () => {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Building the Future of Financial Technology
            </h1>
            <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto">
              We're on a mission to democratize access to advanced AI technology for traders and investors worldwide.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  OptAlpha was founded in 2021 with a clear vision: to harness the power of artificial intelligence and machine learning to transform how traders and investors analyze financial markets.
                </p>
                <p>
                  Headquartered in Delhi, India, our team of data scientists, engineers, and market experts work together to build technology solutions that were previously only accessible to large institutional players.
                </p>
                <p>
                  We believe that better technology leads to better decisions. Our AI-driven platform is designed to cut through market noise and deliver actionable insights that matter.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Founded 2021</h3>
                  <p className="text-muted-foreground text-sm">Established with a vision to democratize AI-powered market analysis.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Delhi, India</h3>
                  <p className="text-muted-foreground text-sm">Our headquarters, where innovation meets execution.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Technology Provider</h3>
                  <p className="text-muted-foreground text-sm">We build tools and platforms, not investment advice.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Enhancing Decision-Making Through Technology
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To enhance trading and investment decision-making using advanced AI and machine learning technologies, empowering market participants with institutional-grade tools and insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
