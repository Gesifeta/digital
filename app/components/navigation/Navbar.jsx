"use client";
import React, { useEffect, useState } from "react";
import { LifeBuoyIcon, Menu, XIcon } from "lucide-react";

import "./Navbar.css";

const Navbar = () => {
  //get the current window size
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [open, setOpen] = useState(true);
useEffect(() => {
    if (windowSize > 768) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, []);
  window.addEventListener("resize", () => {
    setWindowSize(window.innerWidth);
  });
  return (
    <nav className="navbar">
      {open ? (
        <Menu
          className={`navbar-menu`}
          onClick={() => setOpen(!open)}
          size={40}
        />
      ) : (
        <XIcon
          className="menu-close"
          onClick={() => setOpen(!open)}
          size={40}
        />
      )}
      {(!open && window.innerWidth < 768) || windowSize > 600 ? (
        <ul>
          {["Home", "Courses", "Pricing", "About", "Contact"].map(
            (item, index) => {
              return <li key={`${item}-${index}`}>{item}</li>;
            }
          )}
          <span className="btn-group">
            <button className="btn-secondary">Login</button>
            <button className="btn-secondary">Sign Up</button>
          </span>
        </ul>
      ) : null}
    </nav>
  );
};

export default Navbar;
