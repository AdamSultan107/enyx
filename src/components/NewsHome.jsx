import React from "react";
import { motion } from "framer-motion";

const newsData = [
  {
    date: "MARCH 4, 2025",
    title: "Enyx Completes Phase II Trials, Paving the Way for Phase III in 2025",
  },
  {
    date: "MARCH 3, 2025",
    title: "New Gene Therapy Results Show Promising Advances for Rare Diseases",
  },
  {
    date: "FEBRUARY 15, 2025",
    title: "Enyx Announces Collaboration with Leading Research Institutes",
  },
];

const NewsHome = () => {
  return (
    <section className="relative px-6 py-24 max-w-7xl mx-auto">
      {/* Subtle background shape */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute top-0 left-1/2 w-[70rem] h-[70rem] bg-blue-300 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
      />

      <h2 className="text-5xl font-bold mb-16 relative z-10 text-center">In the News</h2>

      <div className="space-y-14 relative z-10">
        {newsData.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center justify-between border border-gray-300 rounded-3xl p-12 hover:bg-gray-50 transition-shadow shadow-lg hover:shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-gray-500 text-lg mb-4 md:mb-0 md:w-60">{item.date}</div>
            <div className="flex-1 font-semibold text-2xl md:text-3xl text-left mb-6 md:mb-0 md:px-8">
              {item.title}
            </div>
            <motion.button
              className="w-full md:w-auto px-8 py-5 bg-black text-white text-xl font-semibold rounded-md hover:bg-gray-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NewsHome;
