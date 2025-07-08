import React from "react";
import { motion } from "framer-motion";

const AboutUsHome = () => {
  return (
    <motion.section
      className="relative w-full px-4 md:px-8 lg:px-16 py-24 overflow-hidden"
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: "100% 50%" }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }}
      style={{
        background: "linear-gradient(270deg, #e6f0ff, #ffffff, #e6f0ff)",
        backgroundSize: "400% 400%",
      }}
    >
      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4">About Us</h2>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
          At Enyx, we are committed to pioneering advancements in gene therapy,
          transforming groundbreaking research into life-changing treatments for
          rare and life-threatening diseases.
        </p>
        <div className="mt-4 w-60 h-1 bg-blue-600 mx-auto"></div>
        <motion.button
          className="mt-6 px-5 py-3 bg-black text-white font-semibold rounded hover:bg-gray-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Who We Are
        </motion.button>

        <h3 className="text-3xl font-bold mt-16 mb-4">Our Vision</h3>
        <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
          We strive to redefine gene therapy by developing treatments that transform lives,
          empower communities, and build a future free from genetic diseases.
        </p>

        <div className="flex flex-col md:flex-row justify-center mt-10 gap-8">
          <div>
            <p className="text-3xl font-bold text-blue-600">15+</p>
            <p className="text-gray-700">Clinical studies</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-600">25</p>
            <p className="text-gray-700">Research partners</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-600">10+</p>
            <p className="text-gray-700">Years of innovation</p>
          </div>
        </div>

        <motion.button
          className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Learn More About Our Work
        </motion.button>
      </div>
    </motion.section>
  );
};

export default AboutUsHome;
