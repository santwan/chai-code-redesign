import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Full Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 overflow-hidden transition-all duration-500 ${
          scrolled ? "h-0 bg-transparent" : "h-auto bg-white dark:bg-black"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8 flex justify-between items-center">
          {/* Logo */}
          <div
            className={`transition-opacity duration-500 ${
              scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <h1 className="text-black dark:text-white text-xl font-bold">ChaiCode</h1>
          </div>

          {/* Center Nav - Hidden on scroll */}
          <div
            className={`hidden sm:flex space-x-8 text-black dark:text-white text-base font-semibold transition-opacity duration-500 ${
              scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <a href="#">Cohorts</a>
            <a href="#">Udemy</a>
            <a href="#">Docs</a>
            <a href="#">Reviews</a>
          </div>

          {/* Desktop Right Section */}
          <div
            className={`hidden sm:flex items-center space-x-3 transition-opacity duration-500 ${
              scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <ThemeToggle />
            <button className="border border-black dark:border-white text-black dark:text-white px-4 py-1 rounded-md">
              Login
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div
            className={`sm:hidden z-50 transition-opacity duration-500 ${
              scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <button onClick={() => setMenuOpen(!menuOpen)}>
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
              className="sm:hidden bg-white dark:bg-black px-4 pb-4 text-black dark:text-white flex flex-col space-y-3"
            >
              <ThemeToggle />
              <a href="#" onClick={() => setMenuOpen(false)}>Login</a>
              <a href="#" onClick={() => setMenuOpen(false)}>Cohorts</a>
              <a href="#" onClick={() => setMenuOpen(false)}>Udemy</a>
              <a href="#" onClick={() => setMenuOpen(false)}>Docs</a>
              <a href="#" onClick={() => setMenuOpen(false)}>Reviews</a>
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
            className="fixed top-3 left-1/2 transform -translate-x-1/2 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-md px-4 py-2 rounded-full shadow-lg 
              flex flex-row items-center justify-center space-x-6 text-black dark:text-white text-sm font-medium 
              whitespace-nowrap overflow-x-auto w-auto max-w-[90vw] sm:max-w-fit"
          >
            <a href="#">Cohorts</a>
            <a href="#">Udemy</a>
            <a href="#">Docs</a>
            <a href="#">Reviews</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
