import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

const publicationsData = [
  {
    category: "Eosinophils",
    articles: [
      { title: "Understanding Eosinophilic Disorders", link: "#" },
      { title: "Latest Research on Eosinophils", link: "#" },
    ],
  },
  {
    category: "Hereditary Angioedema",
    articles: [
      { title: "Advancements in Hereditary Angioedema", link: "#" },
      { title: "New Gene Therapy Solutions", link: "#" },
    ],
  },
  {
    category: "Fat Transplant",
    articles: [
      { title: "Innovations in Fat Transplant Procedures", link: "#" },
      { title: "Case Study: Fat Transplant in Regenerative Medicine", link: "#" },
    ],
  },
];

const Publications = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-6xl mx-auto px-6 pb-20">
      {/* Hero Intro */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-6">Publications</h1>
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "160px" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-1 bg-blue-600 rounded-full mx-auto mb-10"
        ></motion.div>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          At ENYX Therapeutics, we are committed to advancing the field through transparency and collaboration. Explore our latest research and breakthroughs below.
        </p>
      </motion.section>

      {/* Impact Metrics */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-20"
      >
        <div>
          <h3 className="text-4xl font-bold text-blue-600">25+</h3>
          <p className="text-lg text-gray-600">Peer-reviewed publications</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-blue-600">15</h3>
          <p className="text-lg text-gray-600">Ongoing studies</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-blue-600">10+</h3>
          <p className="text-lg text-gray-600">Global collaborations</p>
        </div>
      </motion.div>

      {/* Featured Publication */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="bg-gray-50 border-l-4 border-blue-600 p-8 rounded-lg mb-20 shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-3">Featured Publication</h2>
        <p className="text-lg text-gray-700 mb-3">
          "Breakthrough in Eosinophilic Therapy: A New Hope for Patients"
        </p>
        <a
          href="#"
          className="text-blue-600 text-lg font-medium hover:underline"
        >
          Read Full Article →
        </a>
      </motion.div>

      {/* Accordion Section */}
      <div className="space-y-6">
        {publicationsData.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 * index + 0.6, duration: 0.8 }}
            className="rounded-xl shadow-md bg-white overflow-hidden transition-all"
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center w-full px-6 py-5 text-left text-2xl font-semibold bg-white hover:bg-gray-50 transition"
            >
              <span>{item.category}</span>
              <motion.span
                initial={false}
                animate={{ rotate: openIndex === index ? 90 : 0 }}
                className="text-blue-600 text-3xl transform transition-transform duration-300"
              >
                <FaChevronRight />
              </motion.span>
            </button>

            {/* Accordion Content */}
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50">
                <ul className="space-y-3">
                  {item.articles.map((article, i) => (
                    <li key={i}>
                      <a
                        href={article.link}
                        className="block text-blue-600 text-lg font-medium hover:underline transition"
                      >
                        {article.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-20 text-center"
      >
        <a
          href="/contactus"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-blue-700 transition"
        >
          Contact Us for Research Collaboration
        </a>
      </motion.div>
    </div>
  );
};

export default Publications;
