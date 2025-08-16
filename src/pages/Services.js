import Footer from '../components/Footer';

const Services = () => (
  <>
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Our Services</h2>
      <ul className="space-y-2">
        {["Haircut", "Hair Coloring", "Hair Spa", "Keratin Treatment"].map((s, i) => (
          <li key={i} className="bg-pink-100 p-2 rounded shadow">{s}</li>
        ))}
      </ul>
    </div>
    <Footer />
  </>
);

export default Services;