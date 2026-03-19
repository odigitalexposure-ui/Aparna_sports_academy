import { useState, useCallback, memo } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X,Phone  } from "lucide-react";
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
  ];

  return (
    <motion.header
  className="w-full sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-700 shadow-lg"
  animate={{ y: [0, -3, 0] }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3">

          {/* Logo Image */}
          <div className="h-20 w-20 flex items-center justify-center">
            <img
              src="/logo.jpeg"
              alt="logo"
              className="h-full w-full object-cover rounded-full border-2 border-white shadow-md"
            />
          </div>

          {/* Logo Text */}
          <div className="flex flex-col leading-tight">
            <span className="text-lg md:text-xl lg:text-2xl font-bold text-white tracking-wide">
              Aparna Sports Academy
            </span>
          </div>

        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-colors duration-300 
        ${isActive ? "text-yellow-400" : "text-white"}

        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:h-[2px] after:w-full after:bg-amber-300
        after:origin-left after:scale-x-0
        after:transition-transform after:duration-300

        ${isActive ? "after:scale-x-100" : "hover:after:scale-x-100"}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Sidebar */}
    <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-white/80 backdrop-blur-lg z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeMenu}
                        />

                        {/* Sidebar */}
                        <motion.div
                            className="fixed top-0 right-0 w-72 h-screen z-[999] shadow-2xl p-0 flex flex-col 
  bg-gradient-to-br from-[#0f172a] via-[#6366f1] to-[#ec4899]"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween" }}
                        >
                            {/* Close Button */}
                            <div className="flex justify-between items-center mb-8 pl-4 pt-4 text-white">
                                <h2 className="text-xl font-semibold">Menu</h2>
                                <button onClick={closeMenu}>
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Links */}
                            <div className="pt-4 bg-gradient-to-br from-[#1e3a8a] via-[#4f46e5] to-[#db2777]">
                            <div className="flex flex-col gap-6 px-6">
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

                            {/* Contact */}
                            <div className="mt-auto p-6">
                                <a
                                    href="tel:9330823556"
                                    className="w-full flex justify-center items-center gap-2 bg-white text-blue-700 py-3 rounded-lg hover:bg-gray-100 transition"
                                >
                                    <Phone size={18} />
                                    Call Now
                                </a>
                            </div></div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
    </motion.header>
  );
};

export default memo(Navbar);