import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 text-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-lg leading-8 text-center">
          I'm Prem Prakash Jena, a passionate DevOps Engineer focused on automating, scaling, and securing cloud infrastructure.
          I recently graduated with a B.Tech in Computer Science and am currently building my portfolio with real-world DevOps projects.
        </p>
        <p className="mt-6 text-lg leading-8 text-center">
          My expertise includes tools like Docker, Kubernetes, Terraform, AWS, GitHub Actions, and monitoring solutions like Prometheus and Grafana.
          I'm always learning, building, and optimizing systems to achieve maximum reliability and performance.
        </p>
      </div>
    </section>
  );
};

export default About;
