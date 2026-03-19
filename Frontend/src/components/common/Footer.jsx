import { memo } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#4f46e5] text-gray-200 pt-14 pb-6 overflow-hidden">

      {/* subtle glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white tracking-wide">
            Aparna Sports Academy
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Professional training in Cricket, Football, and Athletics to build future champions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Events", path: "/events" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sports */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Sports</h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Cricket", path: "/cricket" },
              { name: "Football", path: "/football" },
              { name: "Athletics", path: "/athletics" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Contact</h3>

          <div className="flex items-start gap-2 text-sm mb-3 text-gray-300">
            <MapPin size={16} className="mt-1 text-indigo-300" />
            <span>
              Vill + P.O. - Para, new Para, <br />
              P.S. - New Town, Kolkata - 700156
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm mb-3 text-gray-300">
            <Phone size={16} className="text-indigo-300" />
            <span>+91 9876543278</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Mail size={16} className="text-indigo-300" />
            <span>info@aparnasports.com</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            {[Facebook, Instagram].map((Icon, i) => (
              <div
                key={i}
                className="p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition duration-300 cursor-pointer"
              >
                <Icon size={18} className="text-white" />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="relative text-center text-sm text-gray-200 mt-12 border-t border-white/10 pt-5">
        © {new Date().getFullYear()} 
        <span className="text-white font-medium"> Aparna Sports Academy</span>. Design and developed by Digital Exposure Online Services
      </div>

    </footer>
  );
};

export default memo(Footer);