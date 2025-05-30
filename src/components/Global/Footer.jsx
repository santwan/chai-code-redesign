import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-white py-14 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-3">ChaiCode</h2>
          <p className="text-sm font-serif text-gray-400">
            Your daily code companion. Learn effortlessly with curated content, real-world projects, and a caffeine-fueled community.
          </p>
        </div>

        {/* Quick Links (React Router) */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link to="/cohorts" className="hover:text-yellow-400 transition">
                Cohorts
              </Link>
            </li>
            <li>
              <Link to="/udemy" className="hover:text-yellow-400 transition">
                Udemy
              </Link>
            </li>
            <li>
              <Link to="/docs" className="hover:text-yellow-400 transition">
                Docs
              </Link>
            </li>
            <li>
              <Link to="/reviews" className="hover:text-yellow-400 transition">
                Reviews
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="text-gray-300 text-sm space-y-2">
            <li className="flex items-center gap-2">
              <Mail size={16} /> <span>support@chaicode.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> <span>+91-98765-43210</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> <span>Kolkata, India</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect</h3>
          <div className="flex gap-4 text-gray-400">
            <a href="https://www.facebook.com/chaiaurcode/" className="hover:text-blue-500 transition" aria-label="Facebook"><Facebook /></a>
            <a href="https://www.instagram.com/hiteshchoudharyofficial/" className="hover:text-pink-500 transition" aria-label="Instagram"><Instagram /></a>
            <a href="https://x.com/Hiteshdotcom" className="hover:text-sky-400 transition" aria-label="Twitter"><Twitter /></a>
            <a href="https://www.youtube.com/@chaiaurcode" className="hover:text-red-500 transition" aria-label="YouTube"><Youtube /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ChaiCode. All rights reserved.
      </div>

      {/* Glowing CHAICODE Brand Text */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[12rem] font-bold text-center tracking-tighter leading-none w-full mx-auto bg-gradient-to-b from-orange-500/80 to-orange-500/20 bg-clip-text text-transparent break-words"
      >
        CHAICODE
      </motion.h2>
    </footer>
  );
};

export default Footer;
