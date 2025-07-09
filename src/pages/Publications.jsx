import React, { useState } from "react";
import { motion } from "framer-motion";

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
    <div className="max-w-5xl mx-auto px-6 pb-10">
      {/* Hero Intro */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">
          Publications
        </h1>
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "120px" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-1 bg-blue-600 rounded-full mx-auto mb-8"
        ></motion.div>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          At Enyx Therapeutics, we are committed to advancing the field through transparency and collaboration. Explore our latest research and breakthroughs below.
        </p>
      </motion.section>

      {/* Impact Metrics */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-16"
      >
        <div>
          <h3 className="text-3xl font-bold text-blue-600">25+</h3>
          <p className="text-gray-600">Peer-reviewed publications</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-blue-600">15</h3>
          <p className="text-gray-600">Ongoing studies</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-blue-600">10+</h3>
          <p className="text-gray-600">Global collaborations</p>
        </div>
      </motion.div>

      {/* Featured Publication */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="bg-gray-50 border-l-4 border-blue-600 p-6 rounded-lg mb-16 shadow"
      >
        <h2 className="text-xl font-semibold mb-2">Featured Publication</h2>
        <p className="text-gray-700 mb-2">
          "Breakthrough in Eosinophilic Therapy: A New Hope for Patients"
        </p>
        <a
          href="#"
          className="text-blue-600 font-medium hover:underline"
        >
          Read Full Article →
        </a>
      </motion.div>

      {/* Accordion Section */}
      <div className="space-y-4">
        {publicationsData.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 * index + 0.6, duration: 0.8 }}
            className="border border-gray-300 rounded-lg"
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center w-full px-6 py-4 text-left text-xl font-semibold"
            >
              {item.category}
              <span className="text-blue-500 text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* Accordion Content */}
            {openIndex === index && (
              <div className="px-6 pb-4 bg-gray-100">
                <ul className="list-disc pl-5 space-y-2">
                  {item.articles.map((article, i) => (
                    <li key={i}>
                      <a
                        href={article.link}
                        className="text-blue-600 text-lg hover:underline"
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
        className="mt-16 text-center"
      >
        <a
          href="/contactus"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
        >
          Contact Us for Research Collaboration
        </a>
      </motion.div>
    </div>
  );
};

export default Publications;

