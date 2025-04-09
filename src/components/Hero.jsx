import React from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import animationData from "../assets/lottie-animation.json"; // Make sure to add a valid Lottie animation file

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4 relative">
      {/* Lottie Animation */}
      <div className="absolute inset-0 z-0">
        <Lottie 
          options={{
            animationData: animationData,
            loop: true,
            autoplay: true,
          }}
          height={500}
          width={500}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          Hi, I'm <span className="text-blue-500">Prem</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-medium mb-6">
          DevOps Engineer · Automating the Future
        </p>
        <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto mb-8">
          I specialize in CI/CD, cloud infrastructure, Docker, Kubernetes, and everything in between. Passionate about building scalable and secure systems.
        </p>
        <div className="flex justify-center gap-4">
          {/* Resume download link */}
          <a
            href="/resume.pdf"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-xl transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
          {/* GitHub link */}
          <a
            href="https://github.com/prem-pjena"
            className="border border-white hover:bg-white hover:text-black font-medium py-2 px-4 rounded-xl transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
