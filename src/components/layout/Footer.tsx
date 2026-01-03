import { Link } from "react-router-dom";
import logo from "@/assets/optalpha-logo.avif";

const footerLinks = {
  company: [
    { name: "About", path: "/about" },
    { name: "Technology", path: "/technology" },
    { name: "Why OptAlpha", path: "/why-optalpha" },
    { name: "Contact", path: "/contact" },
  ],
  solutions: [
    { name: "AI Analytics", path: "/solutions" },
    { name: "Trading Insights", path: "/solutions" },
    { name: "Market Intelligence", path: "/solutions" },
  ],
  legal: [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-charcoal dark:bg-charcoal text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img 
                src={logo} 
                alt="OptAlpha" 
                className="h-8 md:h-10 w-auto"
              />
            </Link>
            <p className="text-white/70 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
              AI & ML Technology for Financial Markets. Building advanced software solutions for trading and investment analytics.
            </p>
            <p className="text-white/50 text-xs">
              Founded 2021 • Delhi, India
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-xs md:text-sm uppercase tracking-wider text-white/90">
              Company
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-crimson-light transition-colors text-xs md:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-xs md:text-sm uppercase tracking-wider text-white/90">
              Solutions
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-crimson-light transition-colors text-xs md:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-xs md:text-sm uppercase tracking-wider text-white/90">
              Legal
            </h4>
            <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-crimson-light transition-colors text-xs md:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-3 md:pt-4 border-t border-white/10">
              <p className="text-white/50 text-xs">
                contact@optalpha.com
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/10">
          <p className="text-white/50 text-xs mb-4 leading-relaxed max-w-4xl">
            <strong className="text-white/70">Disclaimer:</strong> OptAlpha is a technology provider and does not provide investment advice, brokerage services, or financial recommendations. Past performance of any system or methodology is not indicative of future results. Trading and investing involve significant risk of loss.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} OptAlpha. All rights reserved.
            </p>
            <p className="text-white/40 text-xs">
              AI & ML Technology for Financial Markets
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};