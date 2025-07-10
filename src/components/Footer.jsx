import React from "react";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import enyxLogo from "../assets/enyxwhitelogo.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-blue-600 text-white py-8">
      <div className="footer-container flex flex-wrap justify-between items-start px-8">

        {/* Brand and address */}
        <div className="flex flex-col items-start max-w-xs">
          <a href="/">
            <img src={enyxLogo} alt="Enyx Logo" className="footer-logo w-32 h-auto" />
          </a>
          <p className="font-bold text-left text-xl mt-2 px-8">
            106 W 32nd St, Suite 160, New York, NY 10001
          </p>
        </div>

        {/* Links */}
        <div className="flex space-x-12 font-bold mt-6 sm:mt-0 text-lg">
          <div className="flex flex-col space-y-2">
            <a href="/aboutus" className="hover:text-gray-300 transition-colors duration-300 hover:underline"><h4 className="text-xl">About Us</h4></a>
            <a href="/pipeline" className="hover:text-gray-300 transition-colors duration-300 hover:underline"><h4 className="text-xl">Pipeline</h4></a>
          </div>
          <div className="flex flex-col space-y-2">
            <a href="/publications" className="hover:text-gray-300 transition-colors duration-300 hover:underline"><h4 className="text-xl">Publications</h4></a>
            <a href="/contactus" className="hover:text-gray-300 transition-colors duration-300 hover:underline"><h4 className="text-xl">Contact Us</h4></a>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col mt-6 sm:mt-0 space-y-1">
          <p className="font-bold">admin@enyxtherapeutics.com</p>
          <p className="font-bold">+1 (917) 819-1296</p>
        </div>

        {/* Social */}
        <div className="flex space-x-4 mt-6 sm:mt-0 text-2xl">
          <a href="#" className="hover:scale-110 transform transition-transform duration-300 hover:opacity-80"><BsFacebook /></a>
          <a href="#" className="hover:scale-110 transform transition-transform duration-300 hover:opacity-80"><BsLinkedin /></a>
          <a href="#" className="hover:scale-110 transform transition-transform duration-300 hover:opacity-80"><BsTwitter /></a>
        </div>

      </div>

      <div className="footer-bottom mt-8 text-center px-4">
        <p>
          © {new Date().getFullYear()} Enyx Therapeutics. All rights reserved.{" "}
          <u><a href="/privacy" className="hover:text-gray-300 transition-colors duration-300">Privacy Policy</a></u> |{" "}
          <u><a href="/terms" className="hover:text-gray-300 transition-colors duration-300">Terms and Conditions</a></u>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
