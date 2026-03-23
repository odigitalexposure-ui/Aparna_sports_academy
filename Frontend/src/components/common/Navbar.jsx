import { useState, useCallback, memo } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, Facebook, Instagram, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleNavClick = useCallback(() => {
    closeMenu();
  }, [closeMenu]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Cricket", path: "/cricket" },
    { name: "Football", path: "/football" },
    { name: "Athletics", path: "/athletics" },
    { name: "Contact", path: "/contact" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <>
      {/* 🔥 HEADER */}
      <motion.header
        className="fixed top-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-700 shadow-lg"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* ✅ LEFT → LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <div className="h-20 w-20">
              <img
                src="/logo.jpeg"
                alt="logo"
                className="h-full w-full object-cover rounded-full border-2 border-white shadow-md"
              />
            </div>
            <span className="text-lg md:text-xl font-bold text-white whitespace-nowrap">
              Aparna Sports Academy
            </span>
          </Link>

          {/* ✅ CENTER → MENU (PERFECT BALANCE) */}
          <nav className="hidden md:flex flex-1 justify-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-yellow-400" : "text-white"
                  } after:content-[''] after:absolute after:left-0 after:bottom-0
                   after:h-[2px] after:w-full after:bg-amber-300
                   after:origin-left after:scale-x-0 after:transition-transform after:duration-300
                   ${
                     isActive
                       ? "after:scale-x-100"
                       : "hover:after:scale-x-100"
                   }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* ✅ RIGHT → SOCIAL ICONS */}
          <div className="hidden md:flex items-center gap-4">

            <a
              href="https://www.facebook.com/p/ACA-cricket-100083370240981/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#1877F2] hover:scale-110 transition"
            >
              <Facebook size={16} className="text-white" />
            </a>

            <a
              href="https://www.instagram.com/aparnacricket?igsh=MWJlaWozYmo0dGhqYw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:scale-110 transition"
            >
              <Instagram size={16} className="text-white" />
            </a>

            <a
              href="https://www.youtube.com/@aparnacricketacademy3694"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#FF0000] hover:scale-110 transition"
            >
              <Youtube size={16} className="text-white" />
            </a>

          </div>

          {/* ✅ MOBILE MENU BUTTON */}
          <button onClick={toggleMenu} className="md:hidden text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </motion.header>

      {/* 🔥 MOBILE SIDEBAR */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 right-0 w-72 h-auto z-[999] shadow-2xl flex flex-col 
              bg-gradient-to-br from-[#0f172a] via-[#6366f1] to-[#ec4899]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween" }}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-4 text-white border-b border-white/20">
                <h2 className="text-xl font-semibold">Menu</h2>
                <button onClick={closeMenu}>
                  <X size={24} />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-3 px-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={handleNavClick}
                    className="text-lg text-white/90 hover:text-white transition"
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              {/* Bottom Section */}
              <div className="mt-auto p-6">

                <a
                  href="tel:9330823556"
                  className="w-full flex justify-center items-center gap-2 bg-white text-blue-700 py-3 rounded-lg hover:bg-gray-100 transition"
                >
                  <Phone size={18} />
                  Call Now
                </a>

                {/* Social Icons */}
                <div className="flex justify-center gap-4 mt-6">

                  <a href="https://www.facebook.com/p/ACA-cricket-100083370240981/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2]">
                    <Facebook size={16} className="text-white" />
                  </a>

                  <a href="https://www.instagram.com/aparnacricket?igsh=MWJlaWozYmo0dGhqYw%3D%3D" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                    <Instagram size={16} className="text-white" />
                  </a>

                  <a href="https://www.youtube.com/@aparnacricketacademy3694" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#FF0000]">
                    <Youtube size={16} className="text-white" />
                  </a>

                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(Navbar);