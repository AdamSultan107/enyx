import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Foot from '../components/Footer';
import Gene from '../assets/cartoongene.png';
import Science from '../assets/science.png';

const teamMembers = [
    {
      name: "John Doe",
      position: "Chief Executive Officer",
      img: "https://bootdey.com/img/Content/avatar/avatar1.png",
    },
    {
      name: "Elizabeth Doe",
      position: "Marketing Specialist",
      img: "https://bootdey.com/img/Content/avatar/avatar6.png",
    },
    {
      name: "Doug Doe",
      position: "Head of Support",
      img: "https://bootdey.com/img/Content/avatar/avatar3.png",
    },
    {
      name: "Fabricio Doe",
      position: "Chief Technical Officer",
      img: "https://bootdey.com/img/Content/avatar/avatar4.png",
    }
  ];


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

        <section className="text-center my-16">
          <h2 className="text-4xl font-bold mb-8 underline decoration-blue-500">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
                <img src={member.img} alt={member.name} className="rounded-full mx-auto w-32 h-32 mb-4" />
                <h3 className="text-2xl font-semibold">{member.name}</h3>
                <h4 className="text-gray-500 text-lg">{member.position}</h4>
              </div>
            ))}
          </div>
        </section>
    </div>
    );
  }
  
  export default AboutUs;