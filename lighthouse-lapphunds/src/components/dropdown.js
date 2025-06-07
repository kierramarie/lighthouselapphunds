import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ title, options, anim = false, index = 0, isHamburger = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className="dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="dropdown-toggle">{title}</div>
      {isOpen && (
        <div className={`dropdown-content${isHamburger ? ' hamburger-dropdown' : ''}`}>
          {options.map((option, i) => (
            <Link key={i} to={option.href}>{option.title}</Link>
          ))}
        </div>
      )}
    </li>
  );
};

export default Dropdown;
