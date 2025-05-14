// src/pages/Skills.js
import React from 'react';
import { FaJava } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';


import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPhp,
  FaReact,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiCanva,
} from 'react-icons/si';

const skills = [
  {
    name: 'HTML / CSS',
    icon: <FaHtml5 className="text-orange-600 text-3xl" />,
    level: 'Advanced',
    progress: 90,
  },
  {
    name: 'JavaScript',
    icon: <FaJsSquare className="text-yellow-500 text-3xl" />,
    level: 'Advanced',
    progress: 85,
  },
   {
    name: 'MERN Stack',
    icon: (
      <div className="flex gap-1 justify-center items-center text-xl">
        <SiMongodb className="text-green-600" />
        <SiExpress className="text-gray-700" />
        <FaReact className="text-blue-500" />
        <SiNodedotjs className="text-green-700" />
      </div>
    ),
    level: 'Advanced',
    progress: 85,
  },
  {
    name: 'React',
    icon: <FaReact className="text-blue-500 text-3xl" />,
    level: 'Intermediate',
    progress: 80,
  },
 
  {
    name: 'PHP',
    icon: <FaPhp className="text-indigo-500 text-3xl" />,
    level: 'Intermediate',
    progress: 70,
  },
  {
  name: 'SQL',
  icon: <SiMysql className="text-blue-700 text-3xl" />,
  level: 'Intermediate',
  progress: 70,
},
{
  name: 'Java',
  icon: <FaJava className="text-red-600 text-3xl" />,
  level: 'Beginner',
  progress: 65,
},

  {
    name: 'Canva',
    icon: <SiCanva className="text-blue-600 text-3xl" />,
    level: 'Beginner',
    progress: 60,
  },
];

function Skills() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-100 to-gray-200" id="skills">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-14">
          <span className="text-blue-600">My Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-blue-200 transition-transform transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{skill.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{skill.level}</p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full"
                  style={{ width: `${skill.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
