import { useClickAway } from "react-use";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HamburgerDropdown = ({ title, options, index = 0, openDropdown, setOpenDropdown, setIsMenuOpen }) => {
  const ref = useRef(null);
  const isOpen = openDropdown === title;

  const handleToggle = () => {
    if (isOpen) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(title);
    }
  };

  // Inside useClickAway
  useClickAway(ref, (event) => {
    const clickedInsideAnotherDropdown = event.target.closest('.dropdown') && 
      !ref.current.contains(event.target);

    setTimeout(() => {
        if (!clickedInsideAnotherDropdown) {
          setOpenDropdown(null);
        }}, 500);
    }
  );
  
  return (
      <motion.li
            key={title}
            ref={ref}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1 + index / 10,
            }}
            onClick={handleToggle}
            className="dropdown"
      >
      <div className="dropdown-toggle">{title}</div>
        {isOpen && (
            <div className={`dropdown-content hamburger-dropdown`}>
            {options.map((option, i) => (
                <Link key={i} to={option.href} onClick={() => { setIsMenuOpen(); }} >{option.title}</Link>
            ))}
            </div>
        )}
      </motion.li>
    );
};

export default HamburgerDropdown;
