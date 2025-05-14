
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import axios from 'axios';
import React, { useState } from 'react';


function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
    const handleChange = e => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // Change URL to the live backend on Render
        const res = await axios.post('https://mern-backend-acwg.onrender.com/api/contact', formData);
        alert(res.data.message);  // Or use toast
        setFormData({ name: '', email: '', message: '' });
    } catch (err) {
        alert('Error sending message');
    }
};
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white to-blue-50" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-12">
          <span className="text-blue-600">Contact Me</span>
        </h2>

        <form
  onSubmit={handleSubmit}
  className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-10 space-y-6"
>
  <div className="text-left">
    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Your name"
      className="w-full border border-gray-300 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>

  <div className="text-left">
    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="you@example.com"
      className="w-full border border-gray-300 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>

  <div className="text-left">
    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      rows="5"
      placeholder="Write your message..."
      className="w-full border border-gray-300 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
  >
    Send Message
  </button>
</form>

        {/* Social Links */}
        <div className="mt-14">
          <p className="text-gray-600 text-lg mb-4">Let’s connect:</p>
          <div className="flex justify-center space-x-8 text-3xl">
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
        </div>
      
    </section>
  );
}

export default Contact;
