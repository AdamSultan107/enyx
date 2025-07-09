import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-5 min-h-screen"> 

      {/* Intro */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold mb-3 mt-0">
          Contact Us
        </h1>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-1 bg-blue-600 rounded-full mx-auto mb-8"
          ></motion.div>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          At Enyx Therapeutics, we value open communication and collaboration. Whether you have questions, feedback, or are interested in partnerships, we would love to hear from you.
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        {/* Info Block */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold underline decoration-blue-500 mb-2">Corporate Headquarters</h2>
          <p className="text-xl font-medium">106 W 32nd St, New York, NY 10001</p>

          <h2 className="text-4xl font-bold underline decoration-blue-500 mt-6 mb-2">For All Inquiries</h2>
          <p className="text-xl font-medium">admin@enyxtherapeutics.com</p>
          <p className="text-xl font-medium">+1 (917) 819-1296</p>

          <h2 className="text-4xl font-bold underline decoration-blue-500 mt-6 mb-2">Office Hours</h2>
          <p className="text-xl">Mon – Fri: 9 AM – 6 PM EST</p>
          <p className="text-xl">Sat – Sun: Closed</p>

          <h2 className="text-4xl font-bold underline decoration-blue-500 mt-6 mb-2">Social Media</h2>
          <div className="flex space-x-6">
            <SocialIcon url="https://facebook.com" />
            <SocialIcon url="https://twitter.com" />
            <SocialIcon url="https://linkedin.com" />
          </div>
        </motion.div>

        {/* Google Maps */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold underline decoration-blue-500 mb-2">Location</h2>
          <iframe
            title="Google Maps"
            className="w-full h-[500px] border rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9624456342147!2d-73.99352692359402!3d40.74847767143706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259ae12a2e38f%3A0xd0c3a6fdfd3b177!2s106%20W%2032nd%20St%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1679607458891!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>

      {/* Contact Form */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="bg-gray-50 p-10 rounded-xl shadow-md mb-16"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Send Us a Message</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-4 rounded-lg w-full text-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 p-4 rounded-lg w-full text-lg"
          />
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-300 p-4 rounded-lg w-full md:col-span-2 text-lg"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="border border-gray-300 p-4 rounded-lg w-full md:col-span-2 text-lg"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition md:col-span-2 text-lg"
          >
            Submit
          </button>
        </form>
      </motion.div>

      {/* CTA */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-center"
      >
        <a
          href="/publications"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-blue-700 transition"
        >
          Explore Our Publications
        </a>
      </motion.div>
    </div>
  );
};

export default ContactUs;