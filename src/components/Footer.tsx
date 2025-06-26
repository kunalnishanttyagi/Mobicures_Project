import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f9f7f1] text-gray-800 py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>Company History</li>
            <li>Mission and Values</li>
            <li>Management Board</li>
            <li>Press Release</li>
            <li>Privacy Policy</li>
            <li>Disclaimer</li>
          </ul>
        </div>

        {/* Facilities */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Facilities</h3>
          <ul className="space-y-2">
            <li>Free Doorstep Service</li>
            <li>Flexible Prices</li>
            <li>Data Secure</li>
            <li>Genuine Parts</li>
          </ul>
        </div>

        {/* Products & Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Products & Services</h3>
          <ul className="space-y-2">
            <li>Noida</li>
            <li>Greater Noida</li>
            <li>Ghaziabad</li>
            <li>Delhi</li>
            <li>Gurugram</li>
            <li>Dehradun Uttarakhand</li>
            <li>Bangaluru</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <p>Shop No. 23 dc cartage, Newyork</p>
          <p>Kapeetwa, Industrial Area, Sector 12 – 201333</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm font-semibold">Copyright © 2025 Mobicures</p>
        <div className="flex items-center space-x-6 mt-4 md:mt-0 text-xl">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/919548169407"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </footer>
  );
}
