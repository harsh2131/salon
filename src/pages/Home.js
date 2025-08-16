import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

// Premium Icon Imports
import { 
  FaCut, 
  FaPalette, 
  FaHandSparkles, 
  FaGem, 
  FaShoePrints, 
  FaCrown, 
  FaMagic,
  FaGraduationCap,
  FaShieldAlt,
  FaLeaf,
  FaStar,
  FaPhone,
  FaClock,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaPlay,
  FaHeart,
  FaAward
} from 'react-icons/fa';

import {
  MdSpa,
  MdFace,
  MdAutoAwesome,
  MdDiamond,
  MdStyle
} from 'react-icons/md';

// Enhanced Sample Data with premium icons
const services = [
  { 
    id: 1, 
    name: "Women's Signature Cut", 
    price: 65, 
    duration: 60, 
    icon: FaCut,
    gradient: "from-pink-400 to-rose-500"
  },
  { 
    id: 2, 
    name: "Men's Premium Styling", 
    price: 35, 
    duration: 30, 
    icon: MdStyle,
    gradient: "from-blue-400 to-cyan-500"
  },
  { 
    id: 3, 
    name: "Artistic Hair Coloring", 
    price: 150, 
    duration: 120, 
    icon: FaPalette,
    gradient: "from-purple-400 to-pink-500"
  },
  { 
    id: 4, 
    name: "Luxury Manicure", 
    price: 35, 
    duration: 45, 
    icon: FaHandSparkles,
    gradient: "from-emerald-400 to-teal-500"
  },
  { 
    id: 5, 
    name: "Diamond Gel Manicure", 
    price: 50, 
    duration: 60, 
    icon: FaGem,
    gradient: "from-amber-400 to-orange-500"
  },
  { 
    id: 6, 
    name: "Royal Pedicure", 
    price: 45, 
    duration: 60, 
    icon: FaShoePrints,
    gradient: "from-indigo-400 to-purple-500"
  },
  { 
    id: 7, 
    name: "Bridal Perfection", 
    price: 250, 
    duration: 180, 
    icon: FaCrown,
    gradient: "from-pink-500 to-rose-600"
  },
  { 
    id: 8, 
    name: "Bridesmaid Glamour", 
    price: 100, 
    duration: 90, 
    icon: MdFace,
    gradient: "from-violet-400 to-purple-500"
  },
];

const branches = [
  {
    id: "downtown",
    name: "Downtown Atelier",
    address: "123 Main Street, Downtown",
    phone: "(555) 123-4567",
    hours: "Mon-Sat: 9am-8pm",
  },
  {
    id: "westside",
    name: "Westside Studio", 
    address: "456 Oak Avenue, Westside",
    phone: "(555) 234-5678",
    hours: "Mon-Sat: 8am-9pm",
  },
  {
    id: "northside",
    name: "Northside Boutique",
    address: "789 Pine Road, Northside", 
    phone: "(555) 345-6789",
    hours: "Mon-Fri: 8am-8pm",
  },
];

const testimonials = [
  { rating: 5, quote: "The best balayage I've ever had!", name: "Priya S." },
  { rating: 5, quote: "Such a lovely team and experience. Will return!", name: "Amrita L." },
  { rating: 5, quote: "Professional service and amazing results!", name: "Sarah M." },
];

const team = [
  { 
    name: "Riya Patel", 
    specialty: "Color Specialist", 
    image: "https://images.unsplash.com/photo-1594824388838-99a1d8e24758?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    icon: FaPalette,
    color: "text-purple-500"
  },
  { 
    name: "Maya Singh", 
    specialty: "Bridal Expert", 
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    icon: FaCrown,
    color: "text-pink-500"
  },
  { 
    name: "Arjun Kumar", 
    specialty: "Men's Grooming", 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    icon: MdStyle,
    color: "text-blue-500"
  },
];

// Enhanced Gallery Images
const galleryImages = [
  { 
    src: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90", 
    title: "Elegant Bridal Look", 
    category: "Bridal" 
  },
  { 
    src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90", 
    title: "Traditional Bridal Hair", 
    category: "Bridal" 
  },
  { 
    src: "https://images.unsplash.com/photo-1560869713-7d0b29430803?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90", 
    title: "Bridal Makeup Artistry", 
    category: "Bridal" 
  },
  { 
    src: "https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90", 
    title: "Modern Hair Color", 
    category: "Coloring" 
  },
  { 
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90", 
    title: "Balayage Highlights", 
    category: "Coloring" 
  },
  { 
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90", 
    title: "Precision Cut Style", 
    category: "Haircut" 
  },
];

// Premium Booking Modal with enhanced animations
const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.7, opacity: 0, rotateY: 180 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          exit={{ scale: 0.7, opacity: 0, rotateY: -180 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 max-w-md w-full shadow-2xl border border-white/20 relative overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
                "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))",
                "linear-gradient(45deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          {/* Close button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-gray-100/80 hover:bg-gray-200/80 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <FaTimes className="text-gray-600" />
          </motion.button>

          <div className="text-center mb-6 relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"
            >
              <FaCrown className="text-2xl text-white" />
            </motion.div>
            
            <motion.h3 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-2"
            >
              Book Your Experience
            </motion.h3>
            <motion.p 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600"
            >
              Choose your preferred service and time
            </motion.p>
          </div>
          
          <div className="space-y-4 relative z-10">
            <motion.select 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-300 focus:border-transparent bg-white/80 backdrop-blur-sm text-gray-700 font-medium"
            >
              <option>Select Service</option>
              {services.map(service => (
                <option key={service.id} value={service.id}>
                  {service.name} - ${service.price}
                </option>
              ))}
            </motion.select>
            
            <motion.select 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-300 focus:border-transparent bg-white/80 backdrop-blur-sm text-gray-700 font-medium"
            >
              <option>Select Location</option>
              {branches.map(branch => (
                <option key={branch.id} value={branch.id}>
                  {branch.name}
                </option>
              ))}
            </motion.select>
            
            <motion.input 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              type="date" 
              className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-300 focus:border-transparent bg-white/80 backdrop-blur-sm text-gray-700 font-medium"
            />
            
            <motion.input 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              type="time" 
              className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-300 focus:border-transparent bg-white/80 backdrop-blur-sm text-gray-700 font-medium"
            />
          </div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex gap-3 mt-8 relative z-10"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              className="flex-1 py-4 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </motion.button>
            <motion.button
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <FaHeart className="text-sm" />
              Confirm Booking
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Enhanced Gallery with premium animations
const AdvancedGallery3D = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(images.map(img => img.category))];
  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <div className="relative w-full">
      {/* Premium Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map(category => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentIndex(0);
            }}
            className={`px-6 py-3 rounded-full font-semibold transition-all backdrop-blur-sm relative overflow-hidden ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                : 'bg-white/80 text-gray-700 border border-gray-200 hover:bg-white hover:shadow-md'
            }`}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">{category}</span>
          </motion.button>
        ))}
      </div>

      {/* Enhanced Gallery Display */}
      <motion.div 
        className="relative h-[500px] flex items-center justify-center mb-12 bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
        layout
      >
        <motion.img
          key={filteredImages[currentIndex]?.src}
          src={filteredImages[currentIndex]?.src}
          alt={filteredImages[currentIndex]?.title}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Premium Navigation Buttons */}
        <motion.button
          whileHover={{ scale: 1.1, x: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevImage}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-700 w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all backdrop-blur-sm border border-white/50"
        >
          <FaChevronLeft className="text-lg" />
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1, x: 2 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextImage}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-700 w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all backdrop-blur-sm border border-white/50"
        >
          <FaChevronRight className="text-lg" />
        </motion.button>

        {/* Enhanced image info overlay */}
        <motion.div 
          className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-white/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3">
            <motion.div
              className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div>
              <h4 className="font-bold text-gray-800 text-lg">{filteredImages[currentIndex]?.title}</h4>
              <p className="text-sm text-gray-600 font-medium">{filteredImages[currentIndex]?.category}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Premium Thumbnail Navigation */}
      <div className="flex justify-center gap-3 overflow-x-auto pb-4">
        {filteredImages.map((image, idx) => (
          <motion.button
            key={`thumb-${image.src}-${selectedCategory}`}
            whileHover={{ scale: 1.1, y: -2 }}
            onClick={() => setCurrentIndex(idx)}
            className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 shadow-md ${
              idx === currentIndex 
                ? 'border-blue-400 shadow-lg ring-2 ring-blue-200' 
                : 'border-gray-200 opacity-70 hover:opacity-100 hover:border-gray-300'
            }`}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover"
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

// Premium Team Card with enhanced animations
const TeamCard3D = ({ member }) => {
  const IconComponent = member.icon;
  
  return (
    <motion.div
      className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 cursor-pointer group relative overflow-hidden"
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
      />
      
      <div className="relative z-10">
        <div className="relative mb-6">
          <motion.img 
            src={member.image} 
            alt={member.name}
            className="rounded-full w-32 h-32 mx-auto object-cover border-4 border-gray-100 group-hover:border-white transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
          />
          
          {/* Floating icon */}
          <motion.div
            className={`absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg ${member.color}`}
            whileHover={{ scale: 1.1, rotate: 10 }}
            animate={{ 
              y: [0, -5, 0],
              boxShadow: [
                "0 10px 20px rgba(59, 130, 246, 0.3)",
                "0 15px 30px rgba(147, 51, 234, 0.4)",
                "0 10px 20px rgba(59, 130, 246, 0.3)"
              ]
            }}
            transition={{ 
              y: { duration: 2, repeat: Infinity },
              boxShadow: { duration: 3, repeat: Infinity }
            }}
          >
            <IconComponent className="text-xl text-white" />
          </motion.div>
        </div>
        
        <motion.h3 
          className="font-bold text-xl text-gray-700 text-center group-hover:text-blue-600 transition-colors mb-2"
          whileHover={{ scale: 1.02 }}
        >
          {member.name}
        </motion.h3>
        <motion.p 
          className="text-gray-500 text-center group-hover:text-blue-500 transition-colors font-medium"
          whileHover={{ scale: 1.02 }}
        >
          {member.specialty}
        </motion.p>
      </div>
    </motion.div>
  );
};

// Main Homepage Component with premium enhancements
function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="bg-gray-50 text-gray-800 overflow-hidden">
      
      {/* PREMIUM HERO SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50"
      >
        {/* Enhanced Video Background */}
        <video
          src="/hero-video-desktop.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{
            filter: 'brightness(1.1) contrast(1.05) saturate(1.2)',
          }}
        />
        
        {/* Premium overlay with animated gradient */}
        <motion.div 
          className="absolute inset-0 z-10"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(255, 255, 255, 0.2), rgba(59, 130, 246, 0.1))",
              "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
              "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(255, 255, 255, 0.2))"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        {/* Premium floating particles */}
        <div className="absolute inset-0 z-15">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-30, 30, -30],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.8, 1.5, 0.8],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            >
              <div className="w-3 h-3 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full shadow-lg" />
            </motion.div>
          ))}
        </div>
        
        {/* Enhanced Content */}
        <div className="relative z-20 text-center max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="mb-8"
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 shadow-2xl"
              animate={{ 
                rotate: 360,
                boxShadow: [
                  "0 20px 40px rgba(59, 130, 246, 0.3)",
                  "0 25px 50px rgba(147, 51, 234, 0.4)",
                  "0 20px 40px rgba(59, 130, 246, 0.3)"
                ]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                boxShadow: { duration: 4, repeat: Infinity }
              }}
            >
              <FaCrown className="text-3xl text-white" />
            </motion.div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="text-7xl md:text-9xl font-black bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-8 leading-tight tracking-tight"
          >
            The Vanity Atelier
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.1 }}
            className="text-2xl md:text-3xl text-gray-700 mb-16 font-light tracking-wide"
          >
            Where art, innovation and beauty blend
          </motion.p>
          
          {/* Premium CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsBookingOpen(true)}
              className="group px-10 py-5 rounded-full font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-xl text-xl flex items-center gap-3 transition-all relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full"
                transition={{ duration: 0.8 }}
              />
              <MdAutoAwesome className="text-2xl" />
              <span className="relative z-10">Book Your Experience</span>
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.95)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-full font-bold bg-white/80 backdrop-blur-xl border-2 border-white/50 text-gray-700 text-xl hover:text-gray-900 transition-all shadow-xl flex items-center gap-3"
            >
              <FaPhone className="text-xl" />
              Call Now
            </motion.button>
          </motion.div>
        </div>
        
        {/* Enhanced scroll indicator */}
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <div className="w-8 h-14 border-3 border-gray-600 rounded-full flex justify-center p-2 bg-white/20 backdrop-blur-sm">
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
            />
          </div>
          <span className="text-gray-700 text-sm mt-4 font-semibold tracking-wide">Scroll to explore</span>
        </motion.div>
      </motion.section>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* PREMIUM SERVICES Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        className="py-24 bg-white"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl font-bold text-center bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-20"
        >
          Signature Services
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto px-6">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                className="w-80 bg-white rounded-3xl shadow-xl border border-gray-100 p-8 flex flex-col items-center group cursor-pointer relative overflow-hidden"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -10,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.1,
                  type: "spring",
                  stiffness: 300
                }}
                onClick={() => setIsBookingOpen(true)}
              >
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10`}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Service Icon with premium animation */}
                <motion.div
                  className="relative mb-6"
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                    animate={{ 
                      boxShadow: [
                        "0 10px 20px rgba(0, 0, 0, 0.1)",
                        "0 15px 30px rgba(0, 0, 0, 0.2)",
                        "0 10px 20px rgba(0, 0, 0, 0.1)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <IconComponent className="text-3xl text-white" />
                  </motion.div>
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-700 mb-3 text-center group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-500 mb-6 group-hover:text-blue-500 transition-colors font-medium">
                  {service.duration} min • ${service.price}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                >
                  <FaHeart className="text-sm" />
                  Book Now
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* PREMIUM GALLERY Section */}
      <section className="py-24 bg-gray-50">
  {/* Gallery Title */}
  <motion.h2
    initial={{ opacity: 0, y: -50, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ type: "spring", stiffness: 120, damping: 10, mass: 0.5 }}
    className="text-5xl font-extrabold text-center bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-12 cursor-default select-none"
    whileHover={{ scale: 1.05, textShadow: "0 0 12px rgba(99,102,241,0.6)" }}
  >
    Our Gallery
  </motion.h2>

  {/* Subtitle */}
  <motion.p
    initial={{ opacity: 0, y: 20, scale: 0.9, rotate: -1.5 }}
    whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
    className="text-xl text-center text-gray-600 mb-20 max-w-3xl mx-auto"
  >
    Explore our stunning transformations and artistic creations
  </motion.p>

  {/* Gallery container */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
    className="max-w-6xl mx-auto px-6"
  >
    <AdvancedGallery3D images={galleryImages} />
  </motion.div>
</section>


      {/* PREMIUM BRANCHES Section */}
      <section className="py-24 px-6 bg-white">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-20"
        >
          Find Your Nearest Atelier
        </motion.h2>
        <div className="flex overflow-x-auto gap-10 pb-8 max-w-6xl mx-auto">
          {branches.map((branch, idx) => (
            <motion.div
              key={branch.id}
              className="min-w-[350px] rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 p-8 shadow-xl group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <MdDiamond className="text-xl text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
                    {branch.name}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 text-lg">{branch.address}</p>
                
                <div className="text-gray-600 mb-8 space-y-3">
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <FaPhone className="mr-4 text-blue-500" />
                    <span className="font-medium">{branch.phone}</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <FaClock className="mr-4 text-purple-500" />
                    <span className="font-medium">{branch.hours}</span>
                  </motion.div>
                </div>
                
                <motion.button
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <FaHeart className="text-sm" />
                  Book Here
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PREMIUM VALUE PROPOSITIONS */}
      <section className="py-24 px-6 bg-gray-50">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-16"
        >
          Why Choose Us?
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
          {[
            { icon: FaGraduationCap, text: "Certified Stylists", desc: "Expert professionals", color: "from-blue-500 to-cyan-500" },
            { icon: MdAutoAwesome, text: "Premium Products", desc: "High-quality brands", color: "from-purple-500 to-pink-500" },
            { icon: FaShieldAlt, text: "Sanitized & Safe", desc: "Health protocols", color: "from-green-500 to-emerald-500" },
            { icon: FaLeaf, text: "Vegan & Eco Options", desc: "Sustainable choices", color: "from-emerald-500 to-teal-500" }
          ].map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                className="rounded-3xl bg-white p-8 text-center shadow-xl border border-gray-100 group cursor-pointer relative overflow-hidden max-w-xs"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {/* Animated background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10`}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: 1.1
                  }}
                  animate={{ 
                    y: [0, -5, 0],
                    boxShadow: [
                      "0 10px 20px rgba(0, 0, 0, 0.15)",
                      "0 15px 30px rgba(0, 0, 0, 0.25)",
                      "0 10px 20px rgba(0, 0, 0, 0.15)"
                    ]
                  }}
                  transition={{ 
                    rotate: { duration: 0.5 },
                    y: { duration: 3, repeat: Infinity },
                    boxShadow: { duration: 4, repeat: Infinity }
                  }}
                >
                  <IconComponent className="text-2xl text-white" />
                </motion.div>
                
                <div className="font-bold text-xl text-gray-700 mb-3 group-hover:text-blue-600 transition-colors relative z-10">
                  {item.text}
                </div>
                <div className="text-gray-500 group-hover:text-blue-500 transition-colors relative z-10">
                  {item.desc}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* PREMIUM TESTIMONIALS */}
      <section className="py-24 px-6 bg-white">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-20"
        >
          What Our Clients Say
        </motion.h2>
        <div className="flex overflow-x-auto gap-10 pb-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="min-w-[380px] rounded-3xl bg-gradient-to-br from-white to-gray-50 p-8 shadow-xl border border-gray-100 group relative overflow-hidden"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-orange-50/50 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <FaStar className="text-yellow-400 text-xl mr-1" />
                    </motion.div>
                  ))}
                </div>
                
                <p className="text-gray-600 text-lg italic mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-gray-500 font-semibold group-hover:text-blue-600 transition-colors">
                    — {testimonial.name}
                  </div>
                  <motion.div
                    className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <FaHeart className="text-sm text-white" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PREMIUM TEAM */}
      <section className="py-24 px-6 bg-gray-50">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-20"
        >
          Meet Our Expert Artists
        </motion.h2>
        <div className="flex flex-wrap gap-12 justify-center max-w-5xl mx-auto">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <TeamCard3D member={member} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* PREMIUM FOOTER */}
      { <footer className="py-20 px-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="mb-8 md:mb-0 flex items-center gap-4"
          >
            <motion.div
              className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <FaCrown className="text-xl text-white" />
            </motion.div>
            <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              The Vanity Atelier
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex gap-8 text-gray-300 mb-8 md:mb-0"
          >
            <motion.a 
              href="#" 
              className="hover:text-white transition-colors flex items-center gap-2"
              whileHover={{ y: -3, scale: 1.05 }}
            >
              <FaInstagram className="text-xl" />
              Instagram
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-white transition-colors flex items-center gap-2"
              whileHover={{ y: -3, scale: 1.05 }}
            >
              <FaFacebook className="text-xl" />
              Facebook
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-white transition-colors flex items-center gap-2"
              whileHover={{ y: -3, scale: 1.05 }}
            >
              <FaEnvelope className="text-xl" />
              Contact
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-gray-400 flex items-center gap-2"
          >
            <FaHeart className="text-pink-400" />
            © 2025 The Vanity Atelier. All rights reserved.
          </motion.div>
        </div>
      </footer> }
    </div>
  );
}

export default Home;
