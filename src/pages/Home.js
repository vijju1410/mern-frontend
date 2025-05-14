// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

function Home() {
  // Variants for staggering the buttons
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.8 } },
  };
  const item = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Greeting */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Hey, I’m <span className="text-purple-400">Vijay Prajapati</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-lg md:text-2xl text-gray-300"
        >
          A Web Developer/Frontend Developer crafting beautiful websites.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mt-8 flex justify-center gap-4 flex-wrap"
        >
          <MotionLink
            to="/projects"
            variants={item}
            className="border border-purple-500 hover:bg-purple-600 px-6 py-3 rounded-md text-white font-medium transition duration-300"
          >
            View Projects
          </MotionLink>

          <MotionLink
            to="/resume"
            variants={item}
            className="border border-purple-500 hover:bg-purple-600 px-6 py-3 rounded-md text-white font-medium transition duration-300"
          >
            View Resume
          </MotionLink>

          <motion.a
            href="/Vijay_Resume.pdf"
            download="Vijay_Resume.pdf"
            variants={item}
            className="border border-purple-500 hover:bg-purple-600 px-6 py-3 rounded-md text-white font-medium transition duration-300"
          >
            Download Resume
          </motion.a>

          <MotionLink
            to="/contact"
            variants={item}
            className="border border-purple-500 hover:bg-purple-600 px-6 py-3 rounded-md text-white font-medium transition duration-300"
          >
            Contact Me
          </MotionLink>
        </motion.div>

        {/* Social Icons (static) */}
        <div className="mt-10 flex justify-center gap-6 text-xl">
          <a
            href="https://github.com/vijju1410"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/vijay-prajapati-ab3814234/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/vijju_1410/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
    href="https://wa.me/917490983889"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-green-500"
  >
    <i className="fab fa-whatsapp"></i>
  </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
