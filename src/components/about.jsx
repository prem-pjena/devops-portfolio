import React from "react";

const About = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-teal-400">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Hey there! 👋 I'm a DevOps engineer in the making — fueled by coffee and obsessed with clean pipelines and scalable infra. 
          I live for automating workflows, containerizing chaos, and deploying cloud-native magic. 💻☁️
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mt-4">
          Whether it's Docker, Kubernetes, Terraform, or GitHub Actions — I treat infra like code and pipelines like art. 
          My mission? Build secure, high-performance systems, kill manual tasks, and make deployments feel like pressing the "easy" button. 
          Let’s automate the future 🚀⚙️
        </p>
      </div>
    </section>
  );
};

export default About;
