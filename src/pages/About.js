import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, Heart } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/bg-vanity-pattern.png')" }}
        animate={{ scale: [1, 1.05, 1], x: [0, -20, 0], y: [0, -20, 0] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      <div className="relative z-10 text-gray-800 pt-20">
        <section className="text-center py-24 px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold text-pink-600 mb-6 drop-shadow-md"
          >
            The Vanity Atelier
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-100 drop-shadow-sm"
          >
            Discover the luxury and comfort of The Vanity Atelier — where beauty meets elegance.
          </motion.p>
        </section>
        {/* ... (Keep following your current About content) */}
      </div>
    </div>
  );
};

export default AboutUs;
