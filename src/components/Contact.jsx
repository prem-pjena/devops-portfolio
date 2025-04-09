import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">💌 Get in Touch</h2>
      <form className="max-w-2xl mx-auto grid gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-white"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-white"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition py-3 px-6 rounded text-white font-semibold"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
