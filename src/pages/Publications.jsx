import React, { useState } from 'react';


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

    return (
<div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 underline decoration-blue-500">
          Publications
        </h1>
        <p className="text-lg text-gray-700">
          Find all official Enyx Publications below.
        </p>
      </section>

      {/* Research Categories */}
      <div className="space-y-4">
        {publicationsData.map((item, index) => (
          <div key={index} className="border border-gray-300 rounded-lg">
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
          </div>
        ))}
      </div>
    </div>
  );
};
  
export default Publications;