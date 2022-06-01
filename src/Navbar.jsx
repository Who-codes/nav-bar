import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h1>Logo</h1>
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <div className="link-container show-container">
          <ul className="links">
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="social-icons">li</ul>
      </div>
    </nav>
  );
};

export default Navbar;