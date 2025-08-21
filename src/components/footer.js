 import { Link } from 'react-router-dom';
import { BsWhatsapp } from 'react-icons/bs';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => (
  <footer
    className="relative bg-gray-900 text-white pt-12 pb-8 px-6 mt-12 border-t border-pink-200/10 shadow-inner"
    style={{
      background: 'linear-gradient(120deg, #221016 0%, #251923 60%, #28243c 100%)',
    }}
  >
    {/* Decorative Top Divider */}
    <div
      className="absolute left-0 top-0 w-full h-2"
      style={{
        background: 'linear-gradient(to right, #FFD700 0%, #ffdde1 30%, #ee9ca7 80%)',
        borderRadius: '8px 8px 0 0',
        boxShadow: '0 -2px 16px 0 #FFD70026',
      }}
    />

    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left relative z-10">
      {/* Branding */}
      <div>
        <h3 className="text-3xl font-playfair font-extrabold mb-2 text-pink-50 tracking-wide">
          The Vanity <span className="text-[#FFD700]">Atelier</span>
        </h3>
        <p className="text-pink-100/80 italic mb-4">
          Your beauty is our duty <span role="img" aria-label="scissors">✂️</span>
        </p>
        <div className="text-gray-400 text-sm mt-5">
          <p>
            <span className="font-bold text-pink-200">Visit us:</span>{" "}
            <a
              href="https://maps.app.goo.gl/QWuAySGT63MgcN8a9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 underline"
            >
              123 Trend Ave, Mumbai, India
            </a>
          </p>
          <p>
            <span className="font-bold text-pink-200">Open:</span> Mon–Sat 10:00–19:00
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div>
        <h4 className="font-semibold mb-4 text-lg text-pink-100 tracking-wide">Explore</h4>
        <ul className="space-y-2 text-pink-200/80">
          <li>
            <Link
              to="/"
              className="hover:text-[#FFD700] focus-visible:text-[#FFD700] transition font-medium py-1.5 block rounded"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-[#FFD700] focus-visible:text-[#FFD700] transition font-medium py-1.5 block rounded"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-[#FFD700] focus-visible:text-[#FFD700] transition font-medium py-1.5 block rounded"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-[#FFD700] focus-visible:text-[#FFD700] transition font-medium py-1.5 block rounded"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Social Media & Contact */}
      <div>
        <h4 className="font-semibold mb-4 text-lg text-pink-100 tracking-wide">Connect With Us</h4>
        <div className="flex justify-center md:justify-start flex-wrap gap-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/919909723150"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="group bg-[#111827] rounded-full p-3 hover:bg-green-200/20 transition"
            title="WhatsApp"
          >
            <BsWhatsapp className="w-6 h-6 text-green-400 group-hover:scale-110 transition" />
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/thevanityatelier_?igsh=bmNpdnNqa3dnamZx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group bg-[#111827] rounded-full p-3 hover:bg-pink-200/20 transition"
            title="Instagram"
          >
            <FaInstagram className="w-6 h-6 text-pink-400 group-hover:scale-110 transition" />
          </a>
          {/* Facebook */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="group bg-[#111827] rounded-full p-3 hover:bg-blue-200/20 transition"
            title="Facebook"
          >
            <FaFacebookF className="w-6 h-6 text-blue-400 group-hover:scale-110 transition" />
          </a>
          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="group bg-[#111827] rounded-full p-3 hover:bg-blue-100/20 transition"
            title="Twitter"
          >
            <FaTwitter className="w-6 h-6 text-blue-400 group-hover:scale-110 transition" />
          </a>
          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="group bg-[#111827] rounded-full p-3 hover:bg-red-200/20 transition"
            title="YouTube"
          >
            <FaYoutube className="w-6 h-6 text-red-400 group-hover:scale-110 transition" />
          </a>
        </div>
        <p className="mt-6 text-pink-100/70 text-sm">
          <span className="font-bold">+91 99097 23150</span>
        </p>
      </div>
    </div>

    {/* Copyright */}
    <div className="mt-12 text-center text-sm text-gray-400 border-t border-gray-800 pt-6 z-10 relative">
      © {new Date().getFullYear()} <span className="font-bold text-pink-100">The Vanity Atelier</span>. All rights reserved.
    </div>
  </footer>
);

export default Footer;
