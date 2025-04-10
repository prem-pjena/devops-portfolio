import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80 }}
      className="bg-gray-900 text-white py-4 shadow-lg fixed w-full z-50"
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <motion.h1
          className="text-2xl font-bold"
          whileHover={{ scale: 1.05, color: "#38bdf8" }}
        >
          DevOps Engineer ⚙️
        </motion.h1>
        <div className="space-x-6 text-sm md:text-base">
          <motion.a whileHover={{ scale: 1.1 }} href="#hero" className="hover:text-blue-400 transition">Home</motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="#about" className="hover:text-blue-400 transition">About</motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="#projects" className="hover:text-blue-400 transition">Projects</motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="#contact" className="hover:text-blue-400 transition">Contact</motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
