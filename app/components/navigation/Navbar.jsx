"use client";
import React, { useEffect, useState } from "react";
import { Menu, XIcon } from "lucide-react";

import "./Navbar.css";

const Navbar = () => {
  //get the current window size
  const [windowSize, setWindowSize] = useState(769);
  const [open, setOpen] = useState(true);
  useEffect(() => {
    window?.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
    if (windowSize > 768) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, []);

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
      {(!open && window.innerWidth < 768) || windowSize > 768 ? (
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
