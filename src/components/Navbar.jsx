import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import headpic from "../assets/logo.png.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="header-container">
        <div className="header-title">
          <img src={headpic} />
        </div>
        <nav className={`nav-container ${isOpen ? "is-active" : ""}`}>
          <NavLink to="/" className="links" onClick={() => setIsOpen(false)} >
            Home
          </NavLink>
          <NavLink to="/About" className="links" onClick={() => setIsOpen(false)}>
            About
          </NavLink>

          <NavLink to="/Service" className="links" onClick={() => setIsOpen(false)}>
            Services
          </NavLink>
          <NavLink to="/gallery" className="links" onClick={() => setIsOpen(false)}>
            Gallery
          </NavLink>
          <div className="dropdown">
            <NavLink to="/blogs" className="links" onClick={() => setIsOpen(false)}>
              Blogs
            </NavLink>

            <div className="dropdown-content">
              <NavLink to="/blogs" className="links" onClick={() => setIsOpen(false)}>
                Blogs
              </NavLink>
              <NavLink to="/blogsdetails" className="links" onClick={() => setIsOpen(false)}>
                Blog details
              </NavLink>
            </div>
          </div>

          <NavLink to="/contact" className="links" onClick={() => setIsOpen(false)}>
            contact
          </NavLink>
          <button className="main-button">Free Quote</button>
          <MdCancel
            className="navbar-cancel"
            onClick={() => setIsOpen(false)}
          />
        </nav>
        <button className="navbar-toggler" onClick={toggleNavbar}>
          <GiHamburgerMenu onClick={toggleNavbar} />
        </button>
      </header>
    </>
  );
};

export default Navbar;
