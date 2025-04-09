import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact"; // ✅ Add this
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ResumeDownload from "./components/ResumeDownload"; // ✅ Import ResumeDownload component
import "./index.css";

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="pt-20 scroll-mt-20">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-20">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20">
        <Contact /> {/* 💌 Add the actual contact form here */}
        {/* Adding Resume Download section here */}
        <ResumeDownload /> {/* Add ResumeDownload component here */}
      </section>

      <Footer /> {/* 👣 Actual footer goes below all sections */}
    </div>
  );
};

export default App;
