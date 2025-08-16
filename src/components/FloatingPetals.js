import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Array of different petal images
const petalImages = [
  '/petal1.png',
  '/petal2.png',
  '/petal3.png',
  '/petal4.png',
  '/petal5.png',
  '/petal6.png'
];

const FloatingPetal = ({ index, src }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const y = useSpring(mouseY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set((e.clientX + index * 90) % window.innerWidth);
      mouseY.set((e.clientY + index * 45) % window.innerHeight);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [index, mouseX, mouseY]);

  return (
    <motion.img
      src={src}
      alt={`Floating Petal ${index + 1}`}
      className="w-12 h-12 absolute pointer-events-none opacity-60 select-none z-20"
      style={{ x, y }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.8, scale: 1 }}
      transition={{ duration: 1.2 }}
    />
  );
};

const FloatingPetals = () => (
  <>
    {Array.from({ length: 12 }).map((_, idx) => (
      <FloatingPetal
        key={idx}
        index={idx}
        src={petalImages[idx % petalImages.length]}
      />
    ))}
  </>
);

export default FloatingPetals;
