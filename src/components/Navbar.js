import React, { useState } from "react";
import "./Navbar.css";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-name">SSR CHEMICALS</span>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      
      <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Dropdown title="Products" options={["Basic Chemicals", "Lab Chemicals", "Performance Chemicals", "Vooki"]} />
        </li>
        <li>
          <Dropdown title="Industry" options={["Sugar Chemicals", "Food Colors", "Oil Field Chemicals", "Leather Chemicals", "PU Additives", "Pigment Exports"]} />
        </li>
        <li>
          <Dropdown title="About Us" options={["Who we are", "Our Legacy", "Our Brands & Products"]} />
        </li>
        <li>
          <Dropdown title="Solutions" options={["Research Development", "Our Services"]} />
        </li>
        <li>
          <Dropdown title="Contact" options={["Email", "Phone Number"]} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
