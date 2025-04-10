import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App relative bg-black text-white overflow-x-hidden">
      {/* 🧭 Navbar Section - Fixed on top */}
      <div className="relative z-10">
        <Navbar />

        {/* 🎯 Hero Section */}
        <section id="hero" className="pt-20 scroll-mt-20">
          <Hero />
        </section>

        {/* 🙋‍♂️ About Section */}
        <section id="about" className="scroll-mt-20">
          <About />
        </section>

        {/* 🛠️ Tech Stack Section */}
        <section id="techstack" className="scroll-mt-20">
          <TechStack />
        </section>

        {/* 🚀 Projects Section */}
        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>

        {/* 📬 Contact Section */}
        <section id="contact" className="scroll-mt-20">
          <ContactForm />
        </section>

        {/* 🧾 Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
