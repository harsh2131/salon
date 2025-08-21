import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Services", to: "/services" },
  { name: "Appointment", to: "/appointment" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

export default function VanityNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMagnetic = (e) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const deltaX = (clientX - (left + width / 2)) * 0.1;
    const deltaY = (clientY - (top + height / 2)) * 0.1;
    currentTarget.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  };
  const resetMagnetic = (e) => {
    e.currentTarget.style.transform = "translate(0px, 0px)";
  };

  return (
    <>
      <motion.header
        ref={navRef}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          scrolled
            ? "backdrop-blur-lg bg-[#fefcf9aa] shadow-md border-b border-gray-300"
            : "bg-[#fefcf999] backdrop-blur-lg border-b border-gray-300"
        }`}
      >
        <div className="w-full px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/40 backdrop-blur-lg flex items-center justify-center font-extrabold text-2xl shadow-md select-none"
              whileHover={{ scale: 1.1, rotateY: 10, rotateX: 6 }}
              transition={{ type: "spring", stiffness: 260 }}
            >
              <span className="text-gray-700">V</span>
            </motion.div>

            {/* Animated site name */}
            <motion.div
              className="flex flex-col select-none cursor-pointer"
              initial={{ y: 0, color: "#1f2937" }}
              whileHover={{
                y: [0, -5, 0],
                color: ["#1f2937", "#ec4899", "#1f2937"], // gray-800 to pink-500 and back
                scale: 1.05,
                rotateY: 10,
                rotateX: 6,
                transition: { duration: 1.5, repeat: Infinity, repeatType: "loop" },
              }}
            >
              <motion.span className="font-extrabold text-lg sm:text-xl tracking-tight">
                THE VANITY
              </motion.span>
              <motion.span className="uppercase text-[10px] sm:text-xs font-medium tracking-widest text-gray-500">
                Atelier
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6 ml-auto">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, type: "spring", stiffness: 210 }}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                      isActive
                        ? "bg-white/40 backdrop-blur-md text-gray-900 shadow-sm"
                        : "text-gray-700 hover:text-gray-900 hover:bg-white/30"
                    }`
                  }
                  onMouseMove={handleMagnetic}
                  onMouseLeave={resetMagnetic}
                >
                  {link.name}
                  <span className="absolute bottom-1 left-4 w-0 h-[2px] bg-gray-400 rounded-full transition-all duration-300 group-hover:w-2/3"></span>
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center ml-4 md:hidden">
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-xl bg-white/40 backdrop-blur-lg text-gray-800 shadow-md"
              aria-label="Toggle menu"
            >
              ☰
            </motion.button>
          </div>

          {/* Mobile dropdown menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="absolute top-full left-0 w-full bg-[#fefcf999] backdrop-blur-lg md:hidden rounded-b-xl mt-2 z-50 shadow-md border-b border-gray-300"
              >
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.to}
                    className="block px-8 py-5 text-gray-800 font-semibold hover:bg-white/50 transition-colors duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Spacer div to offset fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
}
