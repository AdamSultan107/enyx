import React from 'react';

const newsData = [
  {
    date: "March 4, 2025",
    title: "Phase II Clinical Trial Success",
    content:
      "Enyx Therapeutics has successfully completed Phase II clinical trials. The results show promising efficacy, paving the way for Phase III trials later this year.",
  },
  {
    date: "March 3, 2025",
    title: "New Gene Therapy Advancements",
    content:
      "Promising efficacy results from our latest study have paved the way for further research into novel gene therapy applications.",
  },
];

const NewsHome = () => {
  return (
    <section className="px-6 py-10 max-w-4xl mx-5">
      <h2 className="text-3xl font-bold mb-6">Latest News</h2>
      {newsData.map((news, index) => (
        <div key={index} className="border-b border-gray-300 pb-4 mb-6">
          <h3 className="font-semibold text-lg">{news.date}</h3>
          <p className="mt-2 text-gray-700">{news.content}</p>
          <button className="mt-3 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-600 transition">
            Read More
          </button>
        </div>
      ))}
    </section>
  );
};

export default NewsHome;