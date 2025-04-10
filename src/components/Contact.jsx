import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mdkeyljn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-16 px-4 sm:px-8 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">💌 Get in Touch</h2>
        <p className="text-gray-300 mb-10 text-lg">
          Let&apos;s build something awesome together! Feel free to reach out.
        </p>

        {submitted ? (
          <p className="text-green-400 text-lg font-semibold">✅ Thanks! I'll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-6 text-left">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-500"
              aria-label="Your Name"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-500"
              aria-label="Your Email"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-500"
              aria-label="Your Message"
            ></textarea>
            {error && <p className="text-red-400">❌ Something went wrong. Please try again.</p>}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 py-3 px-6 rounded-xl text-white font-semibold"
            >
              🚀 Send Message
            </motion.button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;
