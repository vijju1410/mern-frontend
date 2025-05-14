import React from 'react';

const projects = [
  {
    title: 'Electronics E-commerce',
    description: 'A full-featured e-commerce platform built with the MERN stack including user auth, cart, admin panel, and payment integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    link: 'https://github.com/vijju1410/ecommerce_server',
    image: '/images/ecommerce.png',
  
  },
  {
    title: 'Age Calculator App',
    description: 'An Age Calculator platform with calculates your current age from your birth date.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://agecalculatorbyvijay.netlify.app/',
    image: '/images/age.png',

  },
  {
    title: 'Portfolio Website',
    description: 'A personal responsive portfolio showcasing projects, skills, and contact information.',
    tech: ['Mern','React', 'Tailwind CSS'],
    link: 'https://github.com/vijju1410/my-portfolio',
    image: '/images/port.png',

  },

];

function Projects() {
  return (
    <section className="bg-gradient-to-br from-gray-100 to-purple-50 py-20 px-6" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
          <span className="text-blue-600">My Projects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-purple-300 hover:scale-[1.03] transition duration-300">
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover rounded-t-2xl" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-3 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline text-sm font-medium">
                    View Code →
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm font-medium">
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
