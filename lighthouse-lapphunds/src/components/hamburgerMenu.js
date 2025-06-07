import React from "react";
import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import Dropdown from "./dropdown";
import { routes } from "../utils/routes";

const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div className="hamburger-whole">
      <div className="hamburger-close-button">
        <Hamburger toggled={isOpen} size={24} toggle={setOpen} color="#402f0d" rounded />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="hamburger-menu"
          >
            <div>
              <ul>
                  {routes.map((route, idx) => {
                    if (route.href) {
                      return (
                        <motion.li
                          key={route.title}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: 0.1 + idx / 10,
                          }}
                        >
                          <Link to={route.href} onClick={() => setOpen((prev) => !prev)}>{route.title}</Link>
                        </motion.li>
                      );
                    } else {
                      return (
                        <Dropdown
                          key={route.title}
                          title={route.title}
                          options={route.options}
                          anim={true}
                          index={idx}
                          isHamburger={true}
                        />
                      );
                    }
                  })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
