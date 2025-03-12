import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Foot from '../components/Footer';
import Gene from '../assets/cartoongene.png';
import Science from '../assets/science.png';

const AboutUs = () => {
    return (
    <div className ="max-w-5xl mx-auto px-6 py-16">
        <section className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 underline decoration-blue-500">
                About Us
            </h1>
            <p className="text-2xl text-gray-700">
                At Enyx, we are dedicated to advancing gene therapy, turning cutting-edge
                research into transformative treatments for rare and life-threatening diseases.
            </p>
        </section>

        <section className="flex flex-col lg:flex-row items-center gap-x-10 mb-12">
            <div className="w-40 h-40 lg:ml-[-100px]">  
                <img src={Gene} alt="Gene" className="object-contain" />
            </div>
            <div className="w-full">
                <h2 className="text-4xl font-bold mb-4 underline decoration-blue-500">
                    Our Mission & Vision
                    </h2>
                <p className="text-2xl w-full text-left leading-relaxed text-gray-700">
                    Our mission is to develop and deliver innovative gene therapies that 
                    address unmet medical needs, providing hope and healing to patients 
                    and their families.
                </p>
            </div>
        </section>

        <section className="flex flex-col lg:flex-row items-center gap-x-10 mb-12">
        <div className="w-40 h-40 lg:ml-[-100px]">  
                <img src={Science} alt="Science & Technology" className="object-contain" />
            </div>
            <div className="w-full">
                <h2 className="text-4xl font-bold mb-4 underline decoration-blue-500">
                    Our Science
                    </h2>
                <p className="text-2xl w-full text-left leading-relaxed text-gray-700">
                At Enyx Therapeutics, we develop gene therapies for rare diseases, using viral vectors, CRISPR, 
                and cell-based treatments to correct genetic mutations. Our work spans neuromuscular, hematologic, 
                metabolic, and vision disorders, advancing from research to clinical trials to transform lives.
                </p>
            </div>
        </section>
    </div>

    );
  }
  
  export default AboutUs;