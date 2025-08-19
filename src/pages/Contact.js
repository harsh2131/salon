import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  // Contact info
  const phoneNumber = "+91 82388 72273";
  const phoneHref = "tel:+918238872273";
  const email = "info@vanityatelier.com";
  const emailHref = "mailto:info@vanityatelier.com";
  const address = "123 Main Street, Downtown";
  const mapsHref = "https://www.google.com/maps/search/?api=1&query=123+Main+Street,+Downtown";
  const instagramHref = "https://www.instagram.com/thevanityatelier_";

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex flex-col justify-between">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="pt-24 pb-10 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 bg-clip-text text-transparent mb-6"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto"
        >
          We'd love to hear from you! Reach out for appointments, questions, or just to say hello.
        </motion.p>
      </motion.section>

      {/* Contact Info & Form */}
      <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto px-6 pb-24">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-100 p-10 flex flex-col gap-8 justify-center"
        >
          {/* Phone */}
          <a href={phoneHref} className="flex items-center gap-4 hover:text-pink-500 transition" aria-label="Call">
            <FaPhone className="text-pink-500 text-2xl" />
            <span className="text-lg font-semibold text-gray-700">{phoneNumber}</span>
          </a>
          {/* Email */}
          <a href={emailHref} className="flex items-center gap-4 hover:text-purple-500 transition" aria-label="Email">
            <FaEnvelope className="text-purple-500 text-2xl" />
            <span className="text-lg font-semibold text-gray-700">{email}</span>
          </a>
          {/* Address/Google Maps */}
          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:text-yellow-500 transition"
            aria-label="View Map"
          >
            <FaMapMarkerAlt className="text-yellow-500 text-2xl" />
            <span className="text-lg font-semibold text-gray-700">{address}</span>
          </a>
          {/* Instagram Only */}
          <div className="flex gap-6 mt-4">
            <a
              href={instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl text-pink-500" />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="flex-1 bg-white/90 backdrop-blur-2xl rounded-3xl shadow-xl border border-gray-100 p-10 flex flex-col gap-6 relative"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-center bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2"
          >
            Send a Message
          </motion.h2>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-300 bg-white/80 text-gray-700 font-medium"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-300 bg-white/80 text-gray-700 font-medium"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={5}
            className="p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-300 bg-white/80 text-gray-700 font-medium resize-none"
          />
          <motion.button
            whileHover={{
              scale: 1.03,
              background: "linear-gradient(90deg,#ec4899,#a78bfa,#facc15)",
              color: "#fff",
              boxShadow: "0 10px 30px rgba(236,72,153,0.13)",
            }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="mt-2 py-4 rounded-xl bg-gradient-to-r from-pink-300 via-yellow-200 to-yellow-400 border-2 border-[#FFD700] text-[#a6466c] font-bold text-lg shadow-lg transition flex items-center justify-center gap-2"
          >
            <FaHeart className="text-base" />
            Send Message
          </motion.button>
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute left-0 right-0 -bottom-16 mx-auto text-center"
              >
                <div className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-pink-400 to-purple-400 text-white font-semibold shadow-lg">
                  Thank you for reaching out! We'll get back to you soon.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-auto">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0 flex items-center gap-4"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
              <FaHeart className="text-xl text-white" />
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              The Vanity Atelier
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-8 text-gray-300 mb-6 md:mb-0"
          >
            <a
              href={instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <FaInstagram className="text-xl" />
              Instagram
            </a>
            <a
              href={emailHref}
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <FaEnvelope className="text-xl" />
              Email
            </a>
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <FaMapMarkerAlt className="text-xl" />
              Map
            </a>
            <a
              href={phoneHref}
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <FaPhone className="text-xl" />
              Call
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 flex items-center gap-2"
          >
            <FaHeart className="text-pink-400" />
            © 2025 The Vanity Atelier. All rights reserved.
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
