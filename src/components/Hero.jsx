import React from "react";
import HeroImage from "../assets/heroimage.png";


const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-container">
                <div className="hero-text">
                    <h1>Enyx Therapeutics</h1>
                    <p>Revolutionizing the future of medicine.</p>
                </div>
                <div className="hero-image">
                    <img src={HeroImage} alt="Hero Image" />
                </div>
            </div>
        </div>
    );
    };

export default Hero;