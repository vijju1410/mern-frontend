// src/pages/Certificates.js
import React from 'react';

const certificates = [
  {
    title: 'Bachelor of Computer Applications',
    institution: 'L.J University',
    year: '2024',
    type: 'Degree',
    image: '/certificates/deg.png',
    link: 'https://github.com/vijju1410/degree/blob/main/degree.pdf'
  },
    {
    title: 'Introduction to cloud computing',
    institution: 'AWS academy',
    year: '2024',
    type: 'Certificaion',
    image: '/certificates/aws.jpeg',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7171962920073871360/'
  },
    {
    title: 'Programming with Python',
    institution: 'Coursera',
    year: '2023',
    type: 'Certification',
    image: '/certificates/py.png',
    link: 'https://www.coursera.org/account/accomplishments/certificate/VD79GNA5M4WL'
  },
  {
    title: 'Introduction to HTML5',
    institution: 'Coursera',
    year: '2022',
    type: 'Certification',
    image: '/certificates/html.png',
    link: 'https://www.coursera.org/account/accomplishments/certificate/X397RFT8L8KN'
  },
  {
    title: 'Interactivity with JavaScript',
    institution: 'Coursera',
    year: '2022',
    type: 'Certification',
    image: '/certificates/js.png',
    link: 'https://www.coursera.org/account/accomplishments/certificate/JACDQC7M7GG3'
  },
  {
    title: 'Java',
    institution: 'Coursera',
    year: '2022',
    type: 'Certification',
    image: '/certificates/java.png',
    link: 'https://www.coursera.org/account/accomplishments/certificate/4BYWL2LSLCTD'
  },
  {
    title: 'SQL',
    institution: 'Coursera',
    year: '2022',
    type: 'Certification',
    image: '/certificates/sql.png',
    link: 'https://www.coursera.org/account/accomplishments/certificate/GGMCFNV99QGC'
  },
 
];

function Certificates() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white to-blue-50" id="certificates">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
          <span className="text-blue-600">Certifications & Degrees</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="w-full aspect-[4/3] overflow-hidden">
  <img
    src={cert.image}
    alt={cert.title}
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
  />
</div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{cert.title}</h3>
                  <p className="text-sm text-gray-600">{cert.institution}</p>
                  <p className="text-sm text-gray-500">{cert.year}</p>
                  <span className="inline-block mt-3 px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">
                    {cert.type}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
