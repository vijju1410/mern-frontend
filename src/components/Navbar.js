import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // To get the current path

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Determine the active class dynamically
  const getActiveClass = (path) => {
    return location.pathname === path
      ? 'text-blue-600 dark:text-blue-400' // Active menu item class
      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400';
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed top-0 left-0 w-full shadow-md z-50 transition duration-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600 dark:text-white">
          Vijay Prajapati
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`font-medium ${getActiveClass('/')}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`font-medium ${getActiveClass('/about')}`}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`font-medium ${getActiveClass('/projects')}`}
          >
            Projects
          </Link>
          <Link
            to="/skills"
            className={`font-medium ${getActiveClass('/skills')}`}
          >
            Skills
          </Link>
          <Link
            to="/resume"
            className={`font-medium ${getActiveClass('/resume')}`}
          >
            Resume
          </Link>
          <Link
            to="/certificates"
            className={`font-medium ${getActiveClass('/certificates')}`}
          >
            Certifications
          </Link>
          <Link
            to="/contact"
            className={`font-medium ${getActiveClass('/contact')}`}
          >
            Contact
          </Link>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white text-sm rounded"
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 dark:text-white focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-3">
          <Link
            to="/"
            className={`block ${getActiveClass('/')}`}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`block ${getActiveClass('/about')}`}
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`block ${getActiveClass('/projects')}`}
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            to="/skills"
            className={`block ${getActiveClass('/skills')}`}
            onClick={toggleMenu}
          >
            Skills
          </Link>
          <Link
            to="/resume"
            className={`block ${getActiveClass('/resume')}`}
            onClick={toggleMenu}
          >
            Resume
          </Link>
          <Link
            to="/certificates"
            className={`block ${getActiveClass('/certificates')}`}
            onClick={toggleMenu}
          >
            Certifications
          </Link>
          <Link
            to="/contact"
            className={`block ${getActiveClass('/contact')}`}
            onClick={toggleMenu}
          >
            Contact
          </Link>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-2 px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white text-sm rounded"
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
