import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-10 px-6 mt-12">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      
      {/* Branding */}
      <div>
        <h3 className="text-2xl font-bold mb-2">The Vanity Atelier</h3>
        <p className="text-gray-400">Your beauty is our duty ✂️</p>
      </div>

      {/* Navigation */}
      <div>
        <h4 className="font-semibold mb-3 text-lg">Explore</h4>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#" className="hover:text-white transition">Home</a></li>
          <li><a href="#" className="hover:text-white transition">Services</a></li>
          <li><a href="#" className="hover:text-white transition">About</a></li>
          <li><a href="#" className="hover:text-white transition">Contact</a></li>
        </ul>
      </div>

      {/* Social Media */}
      <div>
        <h4 className="font-semibold mb-3 text-lg">Follow Us</h4>
        <div className="flex justify-center md:justify-start gap-4 text-xl">
          <a href="#" className="hover:text-pink-500 transition"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-blue-400 transition"><i className="fab fa-facebook"></i></a>
          <a href="#" className="hover:text-blue-300 transition"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-red-500 transition"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>

    <div className="mt-10 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} The Vanity Atelier. All rights reserved.
    </div>
  </footer>
);

export default Footer;
