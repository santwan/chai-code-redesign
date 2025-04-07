import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "backdrop-blur bg-black/30" : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className={`transition-opacity duration-500 ${
            scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <h1 className="text-white text-xl font-bold">ChaiCode</h1>
        </div>

        {/* Nav Links */}
        <div
          className={`flex space-x-6 text-white text-sm font-medium transition-all duration-500 ${
            scrolled
              ? "absolute left-1/2 -translate-x-1/2 top-4 bg-black/50 px-6 py-2 rounded-full shadow-lg"
              : "relative"
          }`}
        >
          <a href="#">Cohorts</a>
          <a href="#">Udemy</a>
          <a href="#">Docs</a>
          <a href="#">Reviews</a>
        </div>

        {/* Login Button */}
        <div
          className={`transition-opacity duration-500 ${
            scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <button className="border border-white text-white px-4 py-1 rounded-md">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
