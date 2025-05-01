import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import logoDark from "../../assets/chaicode-black.svg";
import logoWhite from "../../assets/chaicode-white.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const navConfig = [
    { label: "Cohorts", href: "#", isLive: true },
    { label: "Udemy", href: "#", isLive: false },
    { label: "Docs", href: "#", isLive: false },
    { label: "Reviews", href: "#", isLive: true },
  ];

  useEffect(() => {
    const root = window.document.documentElement;
    setIsDark(root.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains("dark"));
    });
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 overflow-hidden transition-all duration-500 ${
          scrolled ? "h-0 bg-transparent" : "h-auto bg-white dark:bg-black"
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-4 py-6 sm:py-8 flex justify-between items-center">
          {/* Logo */}
          <div
            className={`transition-opacity duration-500 ${
              scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <img
              src={isDark ? logoWhite : logoDark}
              alt="ChaiCode Logo"
              className="h-8 sm:h-10 md:h-12 max-w-[160px] object-contain"
            />
          </div>

          {/* Center Nav (shown ≥768px) */}
          <div
            className={`hidden md:flex flex-wrap items-center space-x-4 md:space-x-6 lg:space-x-8 text-black dark:text-white text-sm md:text-base font-semibold transition-opacity duration-500 ${
              scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            {navConfig.map(({ label, href, isLive }) => (
              <a
                key={label}
                href={href}
                className="relative flex items-center px-3 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_4px_rgba(255,115,0,0.6)]"
              >
                <span className="relative z-10">{label}</span>
                {isLive && (
                  <span className="ml-1 h-2 w-2 rounded-full bg-green-400 animate-pulse shadow-md"></span>
                )}
              </a>
            ))}
          </div>

          {/* Right side (shown ≥768px) */}
          <div
            className={`hidden md:flex items-center space-x-3 transition-opacity duration-500 ${
              scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <ThemeToggle />
            <button className="text-sm lg:text-base px-5 lg:px-6 pt-2 pb-2 rounded-lg font-bold text-white bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-300 hover:from-orange-600 hover:to-yellow-400 dark:from-orange-600 dark:via-orange-500 dark:to-yellow-400 shadow-md hover:shadow-lg ring-1 ring-orange-300/50 hover:scale-105 transition-all duration-300 ease-in-out">
              Login
            </button>
          </div>

          {/* Mobile Hamburger (shown <768px) */}
          <div
            className={`md:hidden z-50 transition-opacity duration-500 ${
              scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {menuOpen ? (
                <X className="text-black dark:text-white" />
              ) : (
                <Menu className="text-black dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white dark:bg-black px-4 pb-4 text-black dark:text-white flex flex-col space-y-3"
            >
              <ThemeToggle />
              <a href="#" onClick={() => setMenuOpen(false)}>
                Login
              </a>
              {navConfig.map(({ label, href, isLive }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center"
                >
                  {label}
                  {isLive && (
                    <span className="ml-2 h-2 w-2 rounded-full bg-green-400 animate-pulse shadow-md"></span>
                  )}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Floating Nav */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-3 left-1/2 transform -translate-x-1/2 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex flex-row items-center justify-center space-x-6 text-black dark:text-white text-sm font-medium whitespace-nowrap overflow-x-auto w-auto max-w-[90vw] sm:max-w-fit"
          >
            {navConfig.map(({ label, href, isLive }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center"
              >
                {label}
                {isLive && (
                  <span className="ml-2 h-2 w-2 rounded-full bg-green-400 animate-pulse shadow-md"></span>
                )}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
