const Home = () => (
  <div className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-black">
    <video
      src="/hero-video-desktop.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
    />
    <div className="relative z-10 text-center px-4 text-white max-w-4xl">
<h2 className="text-5xl font-bold mb-3 drop-shadow-lg font-playfair tracking-wide">
  Welcome to The Vanity Atelier
</h2>
      <p className="text-lg mb-5 drop-shadow-md">Your beauty is our duty ✂️</p>
      <button className="bg-pink-500 hover:bg-pink-600 text-white text-base font-semibold px-6 py-2 rounded-full shadow-md transition">
        Book Now
      </button>
    </div>


    <div className="absolute inset-0 bg-black/40 z-0" />
  </div>
);

export default Home;
