import { NavLink } from 'react-router-dom'
import Brand from "../assets/enyxlogo.png";
import '../styles/navbar.css';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
            <NavLink to="/">
                <img src={Brand} alt="Enyx Logo" className="logo-img"/>
            </NavLink>
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/aboutus">About Us</NavLink>
            </li>
            {/* <li>
              <NavLink to="/pipeline">Pipeline</NavLink>
            </li> */}
            <li>
              <NavLink to="/publications">Publications</NavLink>
            </li>
            <li>
              <NavLink to="/contactus">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar