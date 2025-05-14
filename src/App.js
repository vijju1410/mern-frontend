import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Certificates from './pages/Certificates'; // Adjust path as needed



function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/resume" element={<Resume />} />
          <Route path="/certificates" element={<Certificates />} />


        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
