import React from "react";
import { motion } from "framer-motion";
import { FaDna, FaMicroscope } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamMembers = [
  {
    name: "John Doe",
    position: "Chief Executive Officer",
    img: "https://bootdey.com/img/Content/avatar/avatar1.png",
  },
  {
    name: "Elizabeth Doe",
    position: "Marketing Specialist",
    img: "https://bootdey.com/img/Content/avatar/avatar6.png",
  },
  {
    name: "Doug Doe",
    position: "Chief Scientific Officer",
    img: "https://bootdey.com/img/Content/avatar/avatar7.png",
  },
];

const AboutUs = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="px-6 py-16 bg-white flex flex-col items-center">
      <motion.h1
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-6 text-center"
      >
        About Us
      </motion.h1>

      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-xl text-gray-600 text-center max-w-3xl mb-16"
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
        className="flex flex-col md:flex-row items-center mb-12 max-w-5xl"
      >
        <FaDna className="text-5xl text-blue-600 mb-4 md:mb-0 md:mr-6" />
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Our Mission & Vision</h2>
          <p className="text-lg text-gray-600">
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
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex flex-col md:flex-row items-center mb-16 max-w-5xl"
      >
        <FaMicroscope className="text-5xl text-blue-600 mb-4 md:mb-0 md:mr-6" />
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Our Science</h2>
          <p className="text-lg text-gray-600">
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
        className="text-2xl font-semibold text-center mb-6 text-blue-600"
      >
        Our Pipeline
      </motion.h2>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mb-16"
      >
        <div className="bg-gray-50 p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-2">Neuromuscular</h3>
          <p className="text-gray-600">Developing therapies targeting severe neuromuscular disorders.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-2">Hematologic</h3>
          <p className="text-gray-600">Advancing gene therapies for blood-related genetic conditions.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-2">Vision Disorders</h3>
          <p className="text-gray-600">Restoring sight and improving vision outcomes through gene editing.</p>
        </div>
      </motion.div>

      {/* Team */}
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="text-2xl font-semibold text-center mb-10 text-blue-600"
      >
        Meet Our Team
      </motion.h2>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="w-full max-w-6xl"
      >
        <Slider {...sliderSettings}>
          {teamMembers.map((member, idx) => (
            <div key={idx} className="px-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
              >
                <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full mb-4 object-cover" />
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </motion.div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default AboutUs;
