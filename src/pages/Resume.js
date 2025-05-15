import React, { useEffect, useState } from 'react';

function Resume() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="py-20 px-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12">
          <span className="text-blue-600">My Resume</span>
        </h2>

        {isMobile ? (
          <div className="text-center">
            <p className="mb-4 text-lg text-gray-600">
              PDF view not supported on mobile. Click below to open or download.
            </p>
            <a
              href="/Vijay_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition"
            >
              View / Download Resume
            </a>
          </div>
        ) : (
          <div className="border rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="/Vijay_Resume.pdf"
              title="Resume"
              className="w-full min-h-[80vh]"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default Resume;
