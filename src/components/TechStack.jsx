import React from "react";

const techs = [
  "Docker 🐳",
  "Kubernetes ☸️",
  "Terraform 🌍",
  "GitHub Actions ⚙️",
  "AWS ☁️",
  "Linux 🐧",
  "Nginx 🌐",
  "Prometheus 📈",
  "Grafana 📊",
  "PostgreSQL 🐘",
];

const TechStack = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-teal-400">Tech Stack</h2>
        <p className="text-gray-300 mb-10 text-lg">
          Tools I use to turn ideas into reality & automate the heck out of everything:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-white text-lg font-medium">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-700 p-4 rounded-xl hover:scale-105 transform transition duration-300 shadow-md"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
