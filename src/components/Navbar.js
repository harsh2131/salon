import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Appointment", to: "/appointment" },
  { name: "Contact", to: "/contact" },
];

export default function VanityNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("light");
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const handleMagnetic = (e) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const deltaX = (clientX - (left + width / 2)) * 0.13;
    const deltaY = (clientY - (top + height / 2)) * 0.13;
    currentTarget.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  };
  const resetMagnetic = (e) => {
    e.currentTarget.style.transform = "translate(0px, 0px)";
  };

  return (
    <motion.header
      ref={navRef}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 shadow-xl transition-shadow duration-700 ${
        scrolled ? "backdrop-blur-xl shadow-lg" : ""
      }`}
    >
      <div
        className={`w-full px-6 sm:px-8 py-3 sm:py-4 flex flex-wrap md:flex-nowrap items-center justify-between rounded-none transition-all duration-700 ease-in-out ${
          scrolled
            ? "bg-gradient-to-b from-[#FFE4F3] via-white to-[#FFD6EC] border-b-4 border-yellow-400"
            : "bg-transparent border-b-0"
        }`}
        style={{
          boxShadow: scrolled
            ? "0 6px 30px rgba(236,72,153,0.09)"
            : "none",
          position: "relative",
          transition: "background-color 0.7s ease, border-color 0.7s ease, box-shadow 0.7s ease",
        }}
      >
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(120deg, rgba(236,72,153,0.10), rgba(255,220,255,0.12), rgba(255,234,174,0.11))",
            backgroundSize: "300% 300%",
            filter: "blur(13px)",
            zIndex: -1,
            opacity: scrolled ? 1 : 0,
            transition: "opacity 0.7s ease",
          }}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />

        {/* Logo and Name */}
        <motion.div
          className="flex items-center space-x-3 cursor-pointer"
          whileHover={{ scale: 1.06 }}
        >
          <motion.div
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-tr from-pink-200 via-pink-400 to-yellow-200 flex items-center justify-center font-extrabold text-2xl sm:text-3xl shadow-lg select-none"
            whileHover={{ scale: 1.12, rotateY: 10, rotateX: 6 }}
            transition={{ type: "spring", stiffness: 260 }}
          >
            <span
              className="text-pink-700"
              style={{
                textShadow: "0 0 12px rgba(236,72,153,0.14)",
                fontWeight: 900,
              }}
            >
              V
            </span>
          </motion.div>
          <div className="flex flex-col select-none">
            <span
              className="text-pink-700 font-extrabold text-xl sm:text-2xl tracking-tight"
              style={{ letterSpacing: "-.5px" }}
            >
              THE VANITY
            </span>
            <span className="uppercase text-[10px] sm:text-xs font-semibold tracking-widest text-pink-400">
              Atelier
            </span>
          </div>
        </motion.div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 flex-grow">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.135, type: "spring", stiffness: 210 }}
            >
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-lg font-semibold transition-all duration-300 group ${
                    isActive
                      ? "bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-md"
                      : "text-pink-700 hover:text-pink-500 hover:bg-pink-100"
                  }`
                }
                onMouseMove={handleMagnetic}
                onMouseLeave={resetMagnetic}
              >
                {link.name}
                <span className="absolute bottom-1 left-4 w-0 h-[2px] bg-pink-300 rounded-full transition-all duration-296 group-hover:w-2/3"></span>
              </NavLink>
            </motion.div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-3 sm:space-x-4 mt-3 md:mt-0">
          {/* Theme Toggle */}
          <motion.button
            whileHover={{ rotate: 180, scale: 1.08 }}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-md ${
              theme === "dark"
                ? "bg-pink-700 text-white"
                : "bg-pink-300 text-pink-800"
            }`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☾" : "☀"}
          </motion.button>

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.93 }}
            className="md:hidden w-10 h-10 rounded-xl bg-gradient-to-r from-pink-500 to-pink-400 text-white shadow-lg"
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
              transition={{ duration: 0.38 }}
              className="absolute top-full left-0 w-full bg-pink-100/80 backdrop-blur-lg md:hidden rounded-b-xl mt-2 z-50 shadow-lg"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  className="block px-8 py-5 text-pink-800 font-semibold hover:bg-pink-300/40 transition-colors duration-160"
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
  );
}
