import React from 'react';

const AboutUsHome = () => {
        return (
          <section className="about-section px-6 py-10 ml-5">
            <h2 className="text-3xl font-bold">About Us</h2>
            <p className="mt-4 text-lg">
              At Enyx, we are committed to pioneering advancements in gene therapy, 
              transforming groundbreaking research into life-changing treatments 
              for rare and life-threatening diseases.
            </p>
            <div className="mt-4 w-60 h-1 bg-blue-600"></div>
            <button className="mt-4 px-4 py-2 bg-black text-white font-semibold rounded">
              Who We Are
            </button>
          </section>
        );
      };
      
      export default AboutUsHome;