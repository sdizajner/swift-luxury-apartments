import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ChevronUp, ChevronDown } from "lucide-react";

export function Layout() {
  const { pathname, hash } = useLocation();

  // Scroll to top or hash on route change
  useEffect(() => {
    if (hash) {
      // Small timeout to ensure the page has rendered before scrolling
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  const scrollUp = () => {
    window.scrollBy({ top: -window.innerHeight * 0.8, behavior: "smooth" });
  };

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans-elegant relative">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />

      {/* Fixed Scroll Controls */}
      <div className="fixed right-6 bottom-12 z-50 flex flex-col gap-3">
        <button
          onClick={scrollUp}
          className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center backdrop-blur-sm bg-background/20 text-primary opacity-60 hover:opacity-100 hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 group"
          aria-label="Scroll Up"
        >
          <ChevronUp size={20} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
        </button>
        <button
          onClick={scrollDown}
          className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center backdrop-blur-sm bg-background/20 text-primary opacity-60 hover:opacity-100 hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 group"
          aria-label="Scroll Down"
        >
          <ChevronDown size={20} className="group-hover:translate-y-0.5 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}
