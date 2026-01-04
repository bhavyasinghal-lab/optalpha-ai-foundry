import { motion } from "framer-motion";
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Send, CheckCircle, MapPin } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import heroImage from "@/assets/hero-ai-visual.png";

// Validation schema
const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100, "First name must be less than 100 characters"),
  lastName: z.string().trim().min(1, "Last name is required").max(100, "Last name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().max(200, "Company name must be less than 200 characters").optional().or(z.literal("")),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(1, "Message is required").max(5000, "Message must be less than 5000 characters"),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const rawData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    // Validate input
    const validation = contactSchema.safeParse(rawData);
    if (!validation.success) {
      const firstError = validation.error.errors[0]?.message || "Invalid input";
      toast.error(firstError);
      setIsSubmitting(false);
      return;
    }

    const validatedData = validation.data;

    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert({
          first_name: validatedData.firstName,
          last_name: validatedData.lastName,
          email: validatedData.email,
          company: validatedData.company || null,
          subject: validatedData.subject,
          message: validatedData.message,
        });

      if (error) {
        console.error("Submission error:", error);
        toast.error("Failed to send message. Please try again.");
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Message sent successfully! We'll be in touch soon.");
    } catch (err) {
      console.error("Unexpected error:", err);
      toast.error("An unexpected error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/90" />
        <div className="absolute inset-0 neural-grid opacity-20" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block text-crimson-light font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
              Contact Us
            </span>
            <h1 className="text-fluid-4xl md:text-fluid-5xl font-bold text-white mb-4 md:mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-white/70 text-fluid-base md:text-fluid-lg max-w-2xl mx-auto">
              Whether you're interested in a demo, have questions about our technology, or want to explore partnership opportunities, we'd love to hear from you.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Contact Form Section */}
      <section className="py-fluid bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-fluid-2xl md:text-fluid-3xl font-bold text-foreground mb-4 md:mb-6">
                Get in Touch
              </h2>
              <p className="text-muted-foreground text-fluid-base mb-6 md:mb-8 leading-relaxed">
                We're here to help you explore how OptAlpha can enhance your trading and investment analysis. Reach out and our team will respond promptly.
              </p>

              <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-card border border-border">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">Email Us</h3>
                    <a href="mailto:contact@optalpha.com" className="text-accent hover:underline text-sm md:text-base">
                      contact@optalpha.com
                    </a>
                    <p className="text-muted-foreground text-xs md:text-sm mt-1">
                      We aim to respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-card border border-border">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">Request a Demo</h3>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      Fill out the form and we'll schedule a personalized walkthrough of our platform.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-muted/50 border border-border">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">Office Location</h3>
                    <p className="text-muted-foreground text-sm md:text-base">
                      Delhi, India
                    </p>
                    <p className="text-muted-foreground text-xs md:text-sm mt-1">
                      Founded 2021 • Technology Provider
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-card border border-border shadow-lg">
                {isSubmitted ? (
                  <div className="text-center py-8 md:py-12">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 md:mb-6">
                      <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-accent" />
                    </div>
                    <h3 className="text-fluid-xl md:text-fluid-2xl font-bold text-foreground mb-3 md:mb-4">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base mb-4 md:mb-6">
                      Your message has been sent successfully. Our team will review your inquiry and get back to you shortly.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-fluid-xl md:text-fluid-2xl font-bold text-foreground mb-4 md:mb-6">
                      Send Us a Message
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        <div className="space-y-1.5 md:space-y-2">
                          <Label htmlFor="firstName" className="text-xs md:text-sm">First Name</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            placeholder="John"
                            required
                            className="bg-background text-sm md:text-base h-10 md:h-11"
                          />
                        </div>
                        <div className="space-y-1.5 md:space-y-2">
                          <Label htmlFor="lastName" className="text-xs md:text-sm">Last Name</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            placeholder="Doe"
                            required
                            className="bg-background text-sm md:text-base h-10 md:h-11"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-1.5 md:space-y-2">
                        <Label htmlFor="email" className="text-xs md:text-sm">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          className="bg-background text-sm md:text-base h-10 md:h-11"
                        />
                      </div>
                      
                      <div className="space-y-1.5 md:space-y-2">
                        <Label htmlFor="company" className="text-xs md:text-sm">Company (Optional)</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your company name"
                          className="bg-background text-sm md:text-base h-10 md:h-11"
                        />
                      </div>
                      
                      <div className="space-y-1.5 md:space-y-2">
                        <Label htmlFor="subject" className="text-xs md:text-sm">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="How can we help?"
                          required
                          className="bg-background text-sm md:text-base h-10 md:h-11"
                        />
                      </div>
                      
                      <div className="space-y-1.5 md:space-y-2">
                        <Label htmlFor="message" className="text-xs md:text-sm">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us more about your needs..."
                          rows={4}
                          required
                          className="bg-background resize-none text-sm md:text-base"
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-accent hover:bg-crimson-light text-accent-foreground h-11 md:h-12 text-sm md:text-base"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-muted-foreground/70 text-xs md:text-sm text-center max-w-3xl mx-auto">
            OptAlpha is a technology provider. We do not provide investment advice, brokerage services, or financial recommendations. All inquiries are for technology and platform-related discussions only.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
