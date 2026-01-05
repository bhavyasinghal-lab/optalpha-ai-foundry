import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import logo from "@/assets/optalpha-logo.avif";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Solutions", path: "/solutions" },
  { name: "Technology", path: "/technology" },
  { name: "Why OptAlpha", path: "/why-optalpha" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Check if we're on a page with dark hero
  const isHeroPage = location.pathname === "/" || location.pathname === "/contact" || location.pathname === "/technology";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-2 md:py-3"
          : "py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.nav 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-500 ${
            isScrolled
              ? "bg-background/80 dark:bg-background/90 backdrop-blur-xl shadow-lg shadow-primary/5 border border-border/50"
              : isHeroPage
                ? "bg-white/5 backdrop-blur-md border border-white/10"
                : "bg-background/50 backdrop-blur-md border border-border/30"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group logo-static">
            <motion.img 
              src={logo} 
              alt="OptAlpha Logo" 
              className="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              style={{ filter: 'none' }}
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
            />
          </Link>

          {/* Desktop Navigation - Centered Pill */}
          <div className="hidden lg:flex items-center">
            <div className={`flex items-center gap-1 rounded-full px-2 py-1.5 ${
              isScrolled 
                ? "bg-muted/50" 
                : isHeroPage 
                  ? "bg-white/10" 
                  : "bg-muted/30"
            }`}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                const isHovered = hoveredLink === link.path;
                
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onMouseEnter={() => setHoveredLink(link.path)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="relative px-4 py-2 text-sm font-medium transition-colors"
                  >
                    {/* Background pill animation */}
                    {(isActive || isHovered) && (
                      <motion.div
                        layoutId="navPill"
                        className={`absolute inset-0 rounded-full ${
                          isActive 
                            ? "bg-accent" 
                            : isScrolled 
                              ? "bg-muted" 
                              : isHeroPage 
                                ? "bg-white/20" 
                                : "bg-muted"
                        }`}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className={`relative z-10 transition-colors duration-200 ${
                      isActive
                        ? "text-accent-foreground"
                        : isScrolled 
                          ? "text-foreground/70 hover:text-foreground" 
                          : isHeroPage 
                            ? "text-white/80 hover:text-white" 
                            : "text-foreground/70 hover:text-foreground"
                    }`}>
                      {link.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Desktop CTA & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Link to="/contact">
              <Button 
                variant="ghost" 
                size="sm" 
                className={`text-sm font-medium ${
                  isScrolled 
                    ? "text-foreground/70 hover:text-foreground" 
                    : isHeroPage 
                      ? "text-white/80 hover:text-white hover:bg-white/10" 
                      : "text-foreground/70 hover:text-foreground"
                }`}
              >
                Contact
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="sm" 
                className="bg-accent hover:bg-crimson-light text-accent-foreground font-medium group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 transition-transform group-hover:rotate-12" />
                  Request Demo
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-accent via-crimson-light to-accent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </Button>
            </Link>
          </div>

          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-full transition-colors ${
                isScrolled 
                  ? "text-foreground hover:bg-muted" 
                  : isHeroPage 
                    ? "text-white hover:bg-white/10" 
                    : "text-foreground hover:bg-muted"
              }`}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-4 right-4 mt-2"
          >
            <div className="bg-background/95 dark:bg-background/98 backdrop-blur-xl rounded-2xl border border-border/50 shadow-xl shadow-primary/5 overflow-hidden">
              <div className="p-4 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                        location.pathname === link.path
                          ? "bg-accent text-accent-foreground"
                          : "text-foreground/70 hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="p-4 pt-2 border-t border-border/50 flex flex-col gap-3">
                <Link to="/contact">
                  <Button variant="outline" className="w-full rounded-xl">
                    Contact Us
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button className="w-full bg-accent hover:bg-crimson-light text-accent-foreground rounded-xl">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Request Demo
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};