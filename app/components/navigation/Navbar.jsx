"use client";
import React, { useState } from "react";
import { Menu,XIcon } from "lucide-react";

import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
    
        <ul>
          <li>
          {open? <Menu className="navbar-menu" onClick={() => setOpen(!open)} />:<XIcon onClick={()=>setOpen(!open)} />}
          </li>
          {["Home", "Courses", "Pricing", "About", "Contact"].map(
            (item, index) => {
              return <li key={`${item}-${index}`}>{item}</li>;
            }
          )}
        </ul>
        <div className="btn-group">
      <button className="btn-secondary">Login</button>
      <button className="btn-secondary">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
