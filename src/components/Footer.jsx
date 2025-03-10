import React from "react";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import enyxLogo from "../assets/enyxwhitelogo.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <a href="/">
            <img src={enyxLogo} alt="Enyx Logo" className="footer-logo" />
          </a>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <div className="footer-section">
            <h4>About</h4>
            <ul>
              <li><a href="#">Company</a></li>
              <li><a href="#">Mission</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <ul>
              <li><a href="#">Github</a></li>
              <li><a href="#">Discord</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <a href="#"><BsFacebook /></a>
          <a href="#"><BsLinkedin /></a>
          <a href="#"><BsTwitter /></a>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Enyx Therapeutics. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;