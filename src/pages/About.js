// src/pages/About.js
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  { name: 'HTML/CSS', level: 95 },
  { name: 'MernStack', level: 95 },
  { name: 'Javascript', level: 80 },
  { name: 'PHP', level: 80 },
  { name: 'SQL', level: 80 },
  { name: 'Canva', level: 70 },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Animation variants
  const counter = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.3, duration: 0.6 },
    }),
  };

  return (
    <section className="relative py-24 px-6 bg-white dark:bg-gray-900 overflow-hidden" id="about">
      {/* Accent Shapes */}
      <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-purple-600 rounded-full opacity-20 animate-spin-slow"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-80 h-80 bg-indigo-600 rounded-full opacity-20 animate-pulse"></div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* About Me Header */}
        <motion.h2
          ref={ref}
          variants={counter}
          custom={0}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-8"
        >
          About Me
        </motion.h2>

        

        {/* Profile & Bio */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            custom={3}
            variants={counter}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-indigo-400"
          >
            <img src="/images/vijay.png" alt="Vijay" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            custom={4}
            variants={counter}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="max-w-lg space-y-6 text-gray-700 dark:text-gray-300 text-left"
          >
            <p>
              I’m a <span className="font-semibold text-purple-600">Frontend Developer</span> who builds
              performant web applications with modern technologies. I love turning complex problems into
              elegant solutions.
            </p>
            <p>
              My key strengths are clean code, responsive design, and a user-first mindset. When I’m not
              coding, I’m contributing to open-source or exploring new tools.
            </p>

            {/* Skill Bars */}
            <div className="space-y-4">
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: isInView ? `${skill.level}%` : 0 }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      className="h-full bg-purple-600"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <button
              onClick={() => window.location.href = '/contact'}
              className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition"
            >
              Let’s Work Together
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
