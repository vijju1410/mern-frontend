// src/pages/Resume.js
import React from 'react';

function Resume() {
  return (
    <section className="py-20 px-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
      <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
          <span className="text-blue-600">My Resume</span>
        </h2>
        <div className="border rounded-lg overflow-hidden shadow-lg">
        <iframe
  src="/Vijay_Resume.pdf"
  title="Resume"
  className="w-full h-screen"
/>

        </div>
      </div>
    </section>
  );
}

export default Resume;
