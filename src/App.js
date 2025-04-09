import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm"; // Import Contact Form component
import Footer from "./components/Footer"; // Import Footer component
import Navbar from "./components/Navbar"; // Import Navbar component
import "./App.css";

function App() {
  return (
    <div className="App bg-black text-white">
      {/* Navbar Section - Fixed on top */}
      <Navbar />

      {/* Hero Section - Main introduction */}
      <section id="hero" className="pt-20 scroll-mt-20">
        <Hero />
      </section>

      {/* About Section - Information about yourself */}
      <section id="about" className="scroll-mt-20">
        <About />
      </section>

      {/* Projects Section - Showcase your projects */}
      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>

      {/* Contact Form Section - Section where users can contact you */}
      <section id="contact" className="scroll-mt-20">
        <ContactForm /> {/* Contact Form for user queries */}
      </section>

      {/* Footer Section - Additional links and information */}
      <Footer />
    </div>
  );
}

export default App;
