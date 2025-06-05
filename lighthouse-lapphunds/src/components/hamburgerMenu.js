import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Spiral as Hamburger } from "hamburger-react";
import { routes } from "../utils/routes";
import { Link } from "react-router-dom";
import Dropdown from './dropdown';

const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="hamburger-menu">
      <Hamburger toggled={isOpen} size={24} toggle={setOpen} direction="left" />
      <AnimatePresence>
      {isOpen && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }} >
          <ul>
            {routes.map((route, idx) => {
                    if (Object.hasOwn(route, "href")) {
                        console.log(route.title);
                        return (
                            <motion.li
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20,
                                    delay: 0.1 + idx / 10,
                                }}
                                key={route.title}>
                                    <Link to={route.href}>{route.title}</Link>
                            </motion.li>
                        );
                    }
                    else {
                        return (
                            <Dropdown
                                title={route.title}
                                options={route.options}
                                anim={true}
                                index={idx}
                            />
                        );
                    }
                })}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;