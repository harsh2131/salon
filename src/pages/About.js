import Footer from '../components/Footer';
import React, { useRef, useState } from 'react';

const About = () => {
  const [hovered, setHovered] = useState(false);
  const [triggered, setTriggered] = useState(false);
  const glassRef = useRef(null);

  // Only trigger animation on first hover
  const handleHover = () => {
    if (!triggered) {
      setHovered(true);
      setTriggered(true);
    }
  };

  return (
    <>
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          src="/hero-video-desktop.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        {/* Glassmorphism Overlay with Hover Animation */}
        <div
          ref={glassRef}
          onMouseEnter={handleHover}
          className={`absolute left-1/2 z-10 flex items-center justify-center border border-white/60 bg-white/30 backdrop-blur-lg shadow-2xl mx-auto transition-all duration-[700ms] ease-in-out
            ${hovered
              ? 'top-[70%] w-11/12 max-w-5xl rounded-full flex-row text-left gap-8 py-6 px-12'
              : 'top-1/2 w-full max-w-2xl rounded-3xl flex-col text-center gap-4 py-12 px-8'}
          `}
          style={{
            transform: hovered ? 'translate(-50%, 0)' : 'translate(-50%, -50%)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
            background: 'rgba(255,255,255,0.3)',
            border: '1px solid rgba(255,255,255,0.6)',
            cursor: triggered ? 'default' : 'pointer',
          }}
        >
          <div className={`transition-all duration-[700ms] ease-in-out ${hovered ? 'flex-1 text-left' : 'w-full text-center'}`}>
            <h1 className={`font-bold drop-shadow-lg transition-all duration-[700ms] ease-in-out ${hovered ? 'text-2xl md:text-3xl mb-2' : 'text-4xl md:text-5xl mb-6'}`}>Discover The Vanity Atelier</h1>
            <p className={`transition-all duration-[700ms] ease-in-out ${hovered ? 'text-base mb-0' : 'text-lg mb-8'}`}>Experience luxury, style, and expert care in a space designed for your beauty and comfort.</p>
          </div>
          <div className={`transition-all duration-[700ms] ease-in-out ${hovered ? 'flex-1 flex justify-end' : 'w-full flex justify-center mt-4'}`}>
            <button className="bg-[#FF597B] hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition text-lg">Book Your Experience</button>
          </div>
        </div>
        {/* Overlay for darkening video slightly */}
        <div className="absolute inset-0 bg-black/30 z-0" />
      </section>
      <Footer />
    </>
  );
};

export default About;