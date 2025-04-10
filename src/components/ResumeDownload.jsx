// src/components/ResumeDownload.jsx

import React from "react";

const ResumeDownload = () => {
  return (
    <div className="text-center mt-8">
      <a
        href="https://drive.google.com/uc?export=download&id=184rH85TiVfhbY4ToE-q7erudYZ9G-IpP"
        download="Prem_Prakash_Resume.pdf"
        className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
      >
        Download My Resume
      </a>
    </div>
  );
};

export default ResumeDownload;
