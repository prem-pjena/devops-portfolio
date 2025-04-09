// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-12">
      <p className="text-sm">
        © {new Date().getFullYear()} Crafted with 💻⚙️ & ☕ by Prem. All rights reserved.
      </p>
      <div className="mt-2 flex justify-center space-x-6 text-sm">
        <a
          href="https://github.com/prem-pjena"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/prem-prakash-7b9a561b2/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          LinkedIn
        </a>
        <a
          href="mailto:premprakashjena04@gmail.com"
          className="hover:text-white transition"
        >
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
