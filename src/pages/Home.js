import Footer from '../components/Footer';
import React, { useEffect, useRef, useState } from 'react';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [triggered, setTriggered] = useState(false);
  const glassRef = useRef(null);

  useEffect(() => {
    let timeout;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          timeout = setTimeout(() => {
            setScrolled(true);
            setTriggered(true);
            observer.disconnect();
          }, 500);
        }
      },
      { threshold: 0.5 }
    );
    if (glassRef.current) {
      observer.observe(glassRef.current);
    }
    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [triggered]);

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <video
          src="/hero-video-desktop.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        {/* Glassmorphism Overlay with Scroll Animation */}
        <div
          ref={glassRef}
          className={`absolute left-1/2 z-10 flex items-center justify-center border border-white/60 bg-white/30 backdrop-blur-lg shadow-2xl mx-auto transition-all duration-[1000ms] ease-in-out
            ${scrolled
              ? 'top-[70%] w-11/12 max-w-5xl rounded-full flex-row text-left gap-8 py-6 px-12'
              : 'top-1/2 w-full max-w-2xl rounded-3xl flex-col text-center gap-4 py-12 px-8'}
          `}
          style={{
            transform: scrolled ? 'translate(-50%, 0)' : 'translate(-50%, -50%)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
            background: 'rgba(255,255,255,0.3)',
            border: '1px solid rgba(255,255,255,0.6)',
          }}
        >
          <div className={`transition-all duration-[1000ms] ease-in-out ${scrolled ? 'flex-1 text-left' : 'w-full text-center'}`}>
            <h2 className={`font-bold drop-shadow-lg transition-all duration-[1000ms] ease-in-out ${scrolled ? 'text-2xl md:text-3xl mb-2' : 'text-5xl mb-3'}`}>Welcome to The Vanity Atelier</h2>
            <p className={`transition-all duration-[1000ms] ease-in-out ${scrolled ? 'text-base mb-0' : 'text-lg mb-5'}`}>Your beauty is our duty ✂️</p>
          </div>
          <div className={`transition-all duration-[1000ms] ease-in-out ${scrolled ? 'flex-1 flex justify-end' : 'w-full flex justify-center mt-4'}`}>
            <button className="bg-pink-500 hover:bg-pink-600 text-white text-base font-semibold px-6 py-2 rounded-full shadow-md transition text-lg">Book Now</button>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/40 z-0" />
      </div>
      <Footer />
    </>
  );
};

export default Home;
