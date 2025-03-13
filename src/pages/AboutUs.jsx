import React from 'react';
import Gene from '../assets/cartoongene.png';
import Science from '../assets/science.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { pre } from 'framer-motion/client';

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

  const testimonials = [
    {
      name: "Maria Kate",
      role: "Photographer",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp",
      text: "Enyx Therapeutics has truly changed my life. Their research and dedication to gene therapy innovation are unparalleled.",
    },
    {
      name: "John Doe",
      role: "Web Developer",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp",
      text: "The groundbreaking advancements by Enyx have given hope to many families around the world.",
    },
    {
      name: "Anna Deynah",
      role: "Web Developer",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
      text: "Thanks to Enyx Therapeutics, I have a second chance at life. Their commitment to patient care is extraordinary.",
    }
  ];

  const NextArrow = ({ onClick }) => {
    return (
      <div 
        className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 text-gray-500 hover:text-gray-800 cursor-pointer z-10"
        onClick={onClick}
      >
        <FaChevronRight size={30} />
      </div>
    );
  };
  
  const PrevArrow = ({ onClick }) => {
    return (
      <div 
        className="absolute top-1/2 left-[-40px] transform -translate-y-1/2 text-gray-500 hover:text-gray-800 cursor-pointer z-10"
        onClick={onClick}
      >
        <FaChevronLeft size={30} />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

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

        {/* Our Mission & Vision */}
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

        {/* Our Science */}
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

        {/* Meet Our Team */}
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
        
        {/* Testimonials */}
        <section className="my-16">
          <h2 className="text-4xl font-bold text-center mb-6 underline decoration-blue-500">
            Our Patients' Stories
          </h2>
          <div className="max-w-4xl mx-auto">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-6 text-center">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="mx-auto w-30 h-30 mb-4 rounded-full"
                  />
                  <p className="text-lg italic">"{testimonial.text}"</p>
                  <h3 className="mt-4 text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              ))}
            </Slider>
          </div>
        </section>
    </div>
    );
  }
  
  export default AboutUs;