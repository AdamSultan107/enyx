import React from "react";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import enyxLogo from "../assets/enyxwhitelogo.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="/">
            <img src={enyxLogo} alt="Enyx Logo" className="footer-logo" />
            <p className="flex text-left font-bold mx-5">106 W 32nd St, New York, NY 10001</p>
          </a>
        </div>

        <div className="footer-links">
          <div className="footer-section">
            <a href="/aboutus"><h4>About Us</h4></a>
            <a href="/pipeline"><h4>Pipeline</h4></a>
          </div>
          <div className="footer-section">
            <a href="/publications"><h4>Publications</h4></a>
            <a href="/contactus"><h4>Contact Us</h4></a>
          </div>
        </div>

        <div className="footer-contact">
          <p className="font-bold">admin@enyxtherapeutics.com</p>
          <p className="font-bold">+1 (917) 819-1296</p>
        </div>

        <div className="footer-social">
          <a href="#"><BsFacebook /></a>
          <a href="#"><BsLinkedin /></a>
          <a href="#"><BsTwitter /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Enyx Therapeutics. All rights reserved. <u><a href="/privacy">Privacy Policy</a></u> | <u><a href="/terms">Terms and Conditions</a></u></p>
      </div>
    </footer>
  );
};

export default Footer;