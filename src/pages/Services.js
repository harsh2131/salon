import { Star } from 'lucide-react';

const serviceSections = [
  {
    title: "Hair Services",
    desc: "Expert cuts, coloring, and treatments for every hair type.",
    services: ["Haircut", "Hair Coloring", "Hair Spa", "Keratin Treatment"],
    icon: "💇‍♀️",
  },
  {
    title: "Skin & Beauty",
    desc: "Glow with facials, makeup, and rejuvenating therapies.",
    services: ["Facials", "Makeup", "Threading", "Waxing"],
    icon: "💄",
  },
  {
    title: "Nail Care",
    desc: "Pamper your hands and feet with our luxury nail services.",
    services: ["Manicure", "Pedicure", "Nail Art", "Gel Polish"],
    icon: "💅",
  },
  {
    title: "Relaxation",
    desc: "Unwind with spa rituals and soothing massages.",
    services: ["Body Spa", "Massage", "Aromatherapy", "Head Massage"],
    icon: "🧖‍♀️",
  },
];

const Services = () => (
  <div className="py-16 px-6 bg-gradient-to-br from-pink-50 via-white to-pink-100 min-h-screen">
    <div className="text-center mb-14">
      <h2 className="text-5xl font-extrabold text-pink-700 mb-4 drop-shadow-lg">Our Services</h2>
      <p className="text-lg text-gray-600 max-w-xl mx-auto">
        Discover a full spectrum of beauty and wellness treatments, delivered by our expert team in a luxurious setting.
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
      {serviceSections.map((section, idx) => (
        <div
          key={section.title}
          className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-pink-100 p-8 flex flex-col items-center hover:-translate-y-2 hover:shadow-pink-200 transition-all"
        >
          <div className="text-5xl mb-4">{section.icon}</div>
          <h3 className="text-2xl font-bold text-pink-700 mb-2">{section.title}</h3>
          <p className="text-gray-600 mb-6 text-center">{section.desc}</p>
          <ul className="space-y-2 w-full">
            {section.services.map((s, i) => (
              <li
                key={i}
                className="flex items-center gap-2 bg-gradient-to-r from-pink-100 to-pink-200 text-pink-700 px-4 py-2 rounded-full shadow"
              >
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="font-medium">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
