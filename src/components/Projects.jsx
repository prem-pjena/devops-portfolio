// src/components/Projects.jsx

import React from 'react';

const projects = [
  {
    title: 'Medusa on AWS ECS 🚀',
    description:
      'Deployed a scalable Medusa backend on AWS ECS Fargate with Terraform and GitHub Actions for end-to-end CI/CD automation.',
    link: 'https://github.com/prem-pjena/medusa-ecs-deploy',
    tags: ['Terraform', 'AWS', 'ECS', 'GitHub Actions'],
  },
  {
    title: 'Express.js API on EC2 🔧',
    description:
      'Containerized an Express.js API, deployed via Terraform on EC2 with full CI/CD pipeline using GitHub Actions.',
    link: 'https://github.com/prem-pjena/express-api-devops-deploy',
    tags: ['Express', 'EC2', 'Docker', 'CI/CD'],
  },
  {
    title: 'DevOps Portfolio 🌐',
    description:
      'My personal DevOps portfolio built using React, TailwindCSS, and Framer Motion. Designed for vibes, deployed on Vercel.',
    link: 'https://github.com/prem-pjena/devops-portfolio',
    tags: ['React', 'TailwindCSS', 'Framer Motion', 'Vercel'],
  },
];

const Projects = () => {
  return (
    <section className="bg-black py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-teal-400 mb-10 text-center">
          🚀 Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-teal-400/50 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-700 px-3 py-1 text-sm rounded-full text-teal-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline font-medium"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
