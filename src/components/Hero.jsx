import React from "react";
import HeroImage from "../assets/heroimage.png";

const Hero = () => {
  return (
    <div className="w-full flex flex-col gap-y-10 lg:flex-row items-center gap-x-10 justify-center py-10 lg:py-14">
      {/* Left Content Section */}
      <div className="lg:w-[650px] lg:px-5 flex flex-col gap-y-5">
        <h1 className="text-4xl md:text-5xl xl:text-[50px] leading-[1.2] md:max-w-xl md:mx-auto md:text-center lg:text-left lg:mx-0 lg:max-w-full font-semibold dark:text-gray">
          Transforming Lives Through Gene Therapy
        </h1>
        <p className="text-lg md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full md:text-center lg:text-left dark:gray">
        Pioneering cutting-edge genetic treatments to cure rare and life-threatening diseases.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-y-2.5 lg:flex-row gap-x-5">
          <a 
            href="#"
            className="flex w-full lg:w-fit items-center justify-center rounded-lg bg-[#1053F3] px-6 py-2.5 font-semibold text-white transition duration-200 hover:shadow-lg hover:drop-shadow"
          >
            Learn More
          </a>
          {/* <a 
            href="#"
            className="flex w-full lg:w-fit items-center justify-center rounded-lg border border-[#6A65FF] px-6 py-2.5 font-semibold text-[#1053F3] transition duration-200 hover:shadow-lg hover:drop-shadow bg-[#5138EE]/10 dark:text-white dark:bg-transparent dark:border-gray-500/50"
          >
            Learn More
          </a> */}
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="hero-image md:px-5 lg:px-0 w-full lg:w-1/2 rounded-3xl md:pt-2 lg:pt-0 relative">
        <img 
          className="rounded-3xl w-full"
          src={HeroImage}
          alt="DNA Strand"
        />
      </div>
    </div>
  );
};

export default Hero;