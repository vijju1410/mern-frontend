import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Resume from './Resume';
import Certificate from './Certificates';

function Home() {
  const [visibleSections, setVisibleSections] = useState({
    about: false,
    projects: false,
    skills: false,
    resume: false,
    certificate: false,
    contact: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['about', 'projects', 'skills', 'resume', 'certificate', 'contact'];
      const updatedVisibility = {};

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const scrollPosition = window.scrollY + window.innerHeight;
          updatedVisibility[id] = scrollPosition > offsetTop - 100;
        }
      });

      setVisibleSections((prev) => ({ ...prev, ...updatedVisibility }));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.8 } },
  };
  const item = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  // Scroll to a specific section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <section
  id="home"
  className="bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white h-screen flex items-center justify-center px-6"
>
  <div className="max-w-4xl mx-auto text-center">
    
    {/* Profile Picture */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center mb-6"
    >
      
    </motion.div>

    {/* Name */}
    <motion.h1
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-6xl font-extrabold leading-tight"
    >
      Hey, I’m <span className="text-purple-400">Vijay Prajapati</span>
    </motion.h1>

    {/* Subtitle */}
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
      <motion.a
        href="/Vijay_Resume.pdf"
        download="Vijay_Resume.pdf"
        variants={item}
        className="border border-purple-500 hover:bg-purple-600 px-6 py-3 rounded-md text-white font-medium transition duration-300"
      >
        Download Resume
      </motion.a>
    </motion.div>

    {/* Social Icons */}
    <div className="mt-10 flex justify-center gap-6 text-2xl">
      <a href="https://github.com/vijju1410" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400"><i className="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/vijay-prajapati-ab3814234/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><i className="fab fa-linkedin"></i></a>
      <a href="https://www.instagram.com/vijju_1410/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><i className="fab fa-instagram"></i></a>
      <a href="https://wa.me/917490983889" target="_blank" rel="noopener noreferrer" className="hover:text-green-500"><i className="fab fa-whatsapp"></i></a>
      <a href="https://www.facebook.com/vijju.prajapati.90" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><i className="fab fa-facebook"></i></a>
      <a href="https://www.youtube.com/@vijayprajapati014" target="_blank" rel="noopener noreferrer" className="hover:text-red-500"><i className="fab fa-youtube"></i></a>
    </div>

    {/* Optional credit */}
    <p className="mt-6 text-sm text-gray-500">Crafted with ❤️ by Vijay | A Web Developer</p>
  </div>
</section>


      {/* About Section */}
      <section
        id="about"
        className={`transition-all duration-1000 ease-in-out ${visibleSections.about ? 'opacity-100' : 'opacity-0'}`}
        style={{ transform: visibleSections.about ? 'translateY(0)' : 'translateY(100px)' }}
      >
        {visibleSections.about && <About />}
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`transition-all duration-1000 ease-in-out ${visibleSections.projects ? 'opacity-100' : 'opacity-0'}`}
        style={{ transform: visibleSections.projects ? 'translateY(0)' : 'translateY(100px)' }}
      >
        {visibleSections.projects && <Projects />}
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`transition-all duration-1000 ease-in-out ${visibleSections.skills ? 'opacity-100' : 'opacity-0'}`}
        style={{ transform: visibleSections.skills ? 'translateY(0)' : 'translateY(100px)' }}
      >
        {visibleSections.skills && <Skills />}
      </section>

      {/* Resume Section */}
      <section
        id="resume"
        className={`transition-all duration-1000 ease-in-out ${visibleSections.resume ? 'opacity-100' : 'opacity-0'}`}
        style={{ transform: visibleSections.resume ? 'translateY(0)' : 'translateY(100px)' }}
      >
        {visibleSections.resume && <Resume />}
      </section>

      {/* Certificate Section */}
      <section
        id="certificate"
        className={`transition-all duration-1000 ease-in-out ${visibleSections.certificate ? 'opacity-100' : 'opacity-0'}`}
        style={{ transform: visibleSections.certificate ? 'translateY(0)' : 'translateY(100px)' }}
      >
        {visibleSections.certificate && <Certificate />}
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`transition-all duration-1000 ease-in-out ${visibleSections.contact ? 'opacity-100' : 'opacity-0'}`}
        style={{ transform: visibleSections.contact ? 'translateY(0)' : 'translateY(100px)' }}
      >
        {visibleSections.contact && <Contact />}
      </section>
    </div>
  );
}

export default Home;
