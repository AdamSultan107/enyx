import React from 'react';

//   const newsData = [
//     {
//       date: "March 4, 2025",
//       title: "Phase II Clinical Trial Success",
//       description:
//         "Enyx Therapeutics has successfully completed Phase II clinical trials...",
//     },
//     {
//       date: "March 3, 2025",
//       title: "New Gene Therapy Advancements",
//       description:
//         "Promising efficacy results paving the way for Phase III trials later this year...",
//     },
//   ];

//   return (
//     // <section className="latest-news px-6 py-10">
//     //   <h2 className="text-3xl font-bold">Latest News</h2>
//     //   {newsData.map((news, index) => (
//     //     <NewsItem key={index} {...news} />
//     //   ))}
//     // </section>
//   );
// };

const NewsHome = ({ date, title, content }) => {
    return (
      <div className="border-b border-gray-300 pb-4 mb-4">
        <h3 className="font-bold">{date}</h3>
        <p>{content}</p>
        <button className="mt-2 px-4 py-2 bg-black text-white rounded-md">Read More</button>
      </div>
    );
  };
  
export default NewsHome;