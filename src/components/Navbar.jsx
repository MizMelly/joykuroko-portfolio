import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ scrolled, darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const linkColor = darkMode ? "text-gray-300" : "text-gray-700";
  const linkHover = darkMode ? "hover:text-cyan-400" : "hover:text-cyan-600";

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${
          scrolled
            ? darkMode
              ? "bg-gray-950/80 backdrop-blur-lg border-b border-gray-800 shadow-sm"
              : "bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
        >
          Joy.dev
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-10 text-lg font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className={`${linkColor} ${linkHover} transition-colors`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Dark Mode Toggle */}
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setDarkMode(!darkMode)}
            className={`
              p-3 rounded-full transition-all duration-300
              ${darkMode 
                ? "bg-gray-800/70 hover:bg-gray-700/70 text-yellow-400 shadow-md shadow-gray-900/30" 
                : "bg-gray-200/70 hover:bg-gray-300/70 text-gray-900 shadow-md shadow-gray-400/30"}
            `}
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <FaSun className="text-xl" />
            ) : (
              <FaMoon className="text-xl" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className={`${linkColor} md:hidden text-3xl`}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`
              md:hidden overflow-hidden border-t
              ${
                darkMode
                  ? "bg-gray-950 border-gray-800"
                  : "bg-white border-gray-200"
              }
            `}
          >
            <div className="px-6 py-8 space-y-6">
              <ul className="space-y-6 text-lg font-medium">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className={`${linkColor} ${linkHover} block transition-colors`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Mobile Dark Mode Toggle – text now clearly visible in BOTH modes */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setDarkMode(!darkMode);
                  closeMenu();
                }}
                className={`
                  w-full py-4 px-6 rounded-full font-medium flex items-center justify-center gap-3 transition-all duration-300 border
                  ${darkMode 
                    ? "bg-gray-800 text-yellow-300 border-gray-700 hover:bg-gray-700" 
                    : "bg-gray-100 text-gray-900 border-gray-300 hover:bg-gray-200"}
                `}
              >
                {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                {darkMode ? <FaSun /> : <FaMoon />}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;