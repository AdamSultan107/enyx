import React from "react";
import HeroImage from "../assets/heroimage.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full flex flex-col gap-y-10 lg:flex-row items-center gap-x-10 justify-center py-14 px-8 lg:px-20">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-1/2 flex flex-col gap-y-6 lg:items-start"
      >
        <h1 className="text-9xl md:text-6xl xl:text-7xl leading-tight font-bold text-left">
          Transforming Lives Through <span className="whitespace-nowrap">Gene Therapy</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-xl text-left">
          Pioneering cutting-edge genetic treatments to cure rare and life-threatening diseases.
        </p>

        <div className="flex">
          <a 
            href="/aboutus"
            className="flex items-center justify-center rounded-lg bg-[#1053F3] px-8 py-4 text-lg font-semibold text-white transition duration-200 hover:shadow-lg hover:drop-shadow"
          >
            Learn More
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-1/2 relative rounded-7xl overflow-hidden"
      >
        <img 
          className="rounded-7xl w-full contrast-125" 
          src={HeroImage}
          alt="DNA Strand"
        />
      </motion.div>
    </div>
  );
};

export default Hero;