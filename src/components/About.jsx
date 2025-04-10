import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import devAnimation from "../assets/lottie-animation.json"; // Replace with your Lottie or image
import { DiDocker } from "react-icons/di"; // Docker icon

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-gray-50 dark:bg-[#0a192f]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Hey! I'm <span className="font-semibold text-indigo-500">Prem</span>,
            a passionate DevOps Engineer crafting cloud-native, automated, and
            scalable infrastructure. From Docker to Terraform, CI/CD to Kubernetes—
            I love simplifying the complex!
          </p>
        </motion.div>

        {/* DevOps Icon or Animation */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full h-[300px] md:h-[400px] flex items-center justify-center"
        >
          {/* Rotating Docker Icon */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            className="text-indigo-500 text-8xl" // Increased size for better visibility
          >
            <DiDocker />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
