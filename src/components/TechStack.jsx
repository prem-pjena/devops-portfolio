import React from "react";
import { DiDocker, DiLinux } from "react-icons/di";
import { FaAws, FaGithub, FaJenkins } from "react-icons/fa";
import { SiTerraform, SiPrometheus, SiGrafana, SiAnsible, SiPython, SiKubernetes, SiGithubactions } from "react-icons/si";
import { FiGitBranch, FiGithub } from "react-icons/fi";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { motion } from "framer-motion";

const techs = [
  { icon: <FaAws />, name: "AWS ☁️" },
  { icon: <SiTerraform />, name: "Terraform 🌍" },
  { icon: <DiDocker />, name: "Docker 🐳" },
  { icon: <DiLinux />, name: "Linux 🐧" },
  { icon: <SiPrometheus />, name: "Prometheus 📈" },
  { icon: <SiGrafana />, name: "Grafana 📊" },
  { icon: <FaJenkins />, name: "Jenkins ⚙️" },
  { icon: <FiGitBranch />, name: "Git 🧑‍💻" },
  { icon: <FiGithub />, name: "GitHub 🔧" },
  { icon: <SiAnsible />, name: "Ansible ⚙️" },
  { icon: <SiPython />, name: "Python 🐍" },
  { icon: <SiKubernetes />, name: "Kubernetes 🐙" },
  { icon: <AiOutlineConsoleSql />, name: "Shell Script 🖥️" },
  { icon: <SiGithubactions />, name: "GitHub Actions 🚀" },
];

const getAnimation = (name) => {
  if (name.includes("Docker") || name.includes("Kubernetes")) {
    return { rotate: [0, 360] };
  } else if (name.includes("AWS")) {
    return { scale: [1, 1.05, 1] };
  } else if (name.includes("Linux")) {
    return { rotate: [-5, 5, -5] };
  } else if (name.includes("GitHub")) {
    return { y: [0, -5, 0] };
  } else if (name.includes("Jenkins")) {
    return { rotate: [0, -10, 10, 0] };
  } else if (name.includes("Prometheus")) {
    return { opacity: [1, 0.7, 1] };
  } else if (name.includes("Grafana")) {
    return { scale: [1, 1.1, 1] };
  } else if (name.includes("Python")) {
    return { rotate: [0, 3, -3, 0] };
  } else if (name.includes("Git")) {
    return { x: [0, 3, -3, 0] };
  } else if (name.includes("Shell")) {
    return { scale: [1, 1.1, 1] };
  } else if (name.includes("GitHub Actions")) {
    return { scale: [1, 1.1, 1] };
  } else {
    return {};
  }
};

const TechStack = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-teal-400">Tech Stack</h2>
        <p className="text-gray-300 mb-10 text-lg">
        My go-to tools for building, automating, and scaling modern DevOps workflows:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-white text-lg font-medium">
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.12 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-gray-700 p-4 rounded-xl shadow-md cursor-pointer hover:shadow-teal-400/30 hover:ring-2 hover:ring-teal-300 transition-all duration-300"
            >
              <motion.div
                animate={getAnimation(tech.name)}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="text-3xl flex items-center justify-center gap-2"
              >
                {tech.icon}
              </motion.div>
              <p className="mt-2 text-sm">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;