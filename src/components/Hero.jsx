import React from "react";
import { motion } from "framer-motion";
import { FaCog } from "react-icons/fa"; // Importing a gear icon for DevOps animation

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4 relative overflow-hidden">
      {/* DevOps Icon Animation */}
      <div className="absolute inset-0 z-0 flex justify-center items-center opacity-20 pointer-events-none">
        {/* Rotating Gear Icon */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          className="text-6xl text-blue-500"
        >
          <FaCog />
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-3xl"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          Hello! I'm <span className="text-blue-500">Prem</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-medium mb-6">
          Helping teams go from commit to production without the chaos 🔁🚀
        </p>
        <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto mb-8">
          I build slick CI/CD pipelines, tame cloud beasts, and containerize like a boss. From Docker to Kubernetes, I turn messy infra into smooth ops. Let’s scale it, secure it, and ship it fast. 🚀
        </p>

        {/* Animated Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/uc?id=184rH85TiVfhbY4ToE-q7erudYZ9G-IpP&export=download"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-xl transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/prem-pjena"
            className="border border-white hover:bg-white hover:text-black font-medium py-2 px-4 rounded-xl transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-xl transition"
          >
            Contact Me
          </motion.a>
        </div>

        {/* Project Links */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm sm:text-base">
          <a
            href="https://github.com/prem-pjena/medusa-ecs-deploy"
            className="underline text-blue-400 hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medusa ECS Deploy
          </a>
          <a
            href="https://github.com/prem-pjena/express-api-devops"
            className="underline text-blue-400 hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Express API DevOps
          </a>
          <a
            href="https://github.com/prem-pjena/devops-portfolio"
            className="underline text-blue-400 hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            DevOps Portfolio
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
