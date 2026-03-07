import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Residences", path: "/residences" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-gold py-3 sm:py-4"
          : "bg-transparent py-4 sm:py-6",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link to="/" className="flex flex-col items-start group">
          <span className="font-serif-display text-2xl font-bold text-gold-gradient">
            Swift
          </span>
          <span className="hidden sm:block font-sans-elegant text-xs tracking-[0.3em] uppercase text-foreground/60 group-hover:text-primary transition-colors duration-300">
            Luxury Apartments
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "font-sans-elegant text-sm tracking-widest uppercase transition-colors duration-300 relative",
                location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground/70 hover:text-primary",
                "after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-primary after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300",
                location.pathname === link.path &&
                  "after:scale-x-100 after:origin-bottom-left",
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle - min 44px touch target */}
        <button
          className="md:hidden text-primary p-3 min-w-[44px] min-h-[44px] flex items-center justify-center -mr-1 rounded-md active:bg-primary/10 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav - full-width, touch-friendly */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-background/98 backdrop-blur-lg border-t border-border shadow-gold transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col px-4 sm:px-6 py-4 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "font-sans-elegant text-sm tracking-widest uppercase py-3 px-2 -mx-2 rounded min-h-[44px] flex items-center transition-colors duration-300 active:bg-primary/10",
                location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground/70 hover:text-primary",
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
