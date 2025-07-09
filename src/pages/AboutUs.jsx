import React from "react";
import { motion } from "framer-motion";
import { FaDna, FaMicroscope } from "react-icons/fa";

const teamMembers = [
  {
    name: "Shankar Ramaswamy, MD",
    position: "Co-Founder, Chairman and CEO",
    img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=256",
  },
  {
    name: "Curt Herberts, MBS",
    position: "President & Chief Operating Officer",
    img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=256",
  },
  {
    name: "Michele Stone, PhD",
    position: "Chief Scientific Officer",
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=256",
  },
];


const AboutUs = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="px-6 pb-10 bg-white flex flex-col items-center">
      {/* About Us header */}
      <motion.h1
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold mb-8 text-center"
      >
        About Us
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: "120px" }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="h-1 bg-blue-600 rounded-full mx-auto mb-8"
      ></motion.div>


      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-2xl text-gray-600 text-center max-w-4xl mb-20"
      >
        At Enyx, we are dedicated to advancing gene therapy, turning cutting-edge research into transformative treatments for rare and life-threatening diseases.
      </motion.p>

      {/* Mission & Vision */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex flex-col md:flex-row items-center mb-16 max-w-5xl"
      >
        <FaDna className="text-7xl text-blue-600 mb-4 md:mb-0 md:mr-8" />
        <div>
          <h2 className="text-4xl font-semibold text-blue-600 mb-3">Our Mission & Vision</h2>
          <p className="text-xl text-gray-600">
            Our mission is to develop and deliver innovative gene therapies that address unmet medical needs, providing hope and healing to patients and their families.
          </p>
        </div>
      </motion.div>

      {/* Science */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex flex-col md:flex-row items-center mb-20 max-w-5xl"
      >
        <FaMicroscope className="text-9xl text-blue-600 mb-4 md:mb-0 md:mr-8" />
        <div>
          <h2 className="text-4xl font-semibold text-blue-600 mb-3">Our Science</h2>
          <p className="text-xl text-gray-600">
            At Enyx Therapeutics, we develop gene therapies for rare diseases, using viral vectors, CRISPR, and cell-based treatments to correct genetic mutations. Our work spans neuromuscular, hematologic, metabolic, and vision disorders, advancing from research to clinical trials to transform lives.
          </p>
        </div>
      </motion.div>

      {/* Pipeline */}
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-4xl font-semibold text-center mb-10 text-blue-600"
      >
        Our Pipeline
      </motion.h2>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mb-20"
      >
        <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-3">Neuromuscular</h3>
          <p className="text-lg text-gray-600">Developing therapies targeting severe neuromuscular disorders.</p>
        </div>
        <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-3">Hematologic</h3>
          <p className="text-lg text-gray-600">Advancing gene therapies for blood-related genetic conditions.</p>
        </div>
        <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-3">Vision Disorders</h3>
          <p className="text-lg text-gray-600">Restoring sight and improving vision outcomes through gene editing.</p>
        </div>
      </motion.div>

      {/* Meet Our Team */}
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="text-5xl font-semibold text-center mb-20 text-blue-600"
      >
        Meet Our Team
      </motion.h2>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl"
      >
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-48 h-48 rounded-full mb-5 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-lg text-gray-600">{member.position}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AboutUs;
