
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Dropdown = ({ title, options, anim = false, index = 0 }) => {
    const [isShown, setIsShown] = useState(false);
    let optionsList = [];
    for (let x = 0; x < options.length; x++) {
        optionsList.push( {
            url: "/" + options[x],
            name: options[x].charAt(0).toUpperCase() + options[x].slice(1)
        })
    }
    //console.log(optionsList)
    if (!anim) {
        return (
            <li onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
                    {/* eslint-disable-next-line */}
                    <a
                        className="dropdown-toggle"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        >
                        {title}
                    </a>
                    {isShown && 
                        <div className="dropdown-content">
                            { optionsList.map(option => {
                                return <Link to={option.url} >{option.name.charAt(0).toUpperCase() + option.name.slice(1)}</Link>;
                            })}
                        </div>
                    }
            </li>
        );
    }
    else {
        console.log(title);
        return (
            <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + index / 10,
                }}
                key={title}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
                    {/* eslint-disable-next-line */}
                    <a
                        className="dropdown-toggle"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        >
                        {title}
                    </a>
                    {isShown && 
                        <div className="dropdown-content">
                            { optionsList.map(option => {
                                return <Link to={option.url} >{option.name.charAt(0).toUpperCase() + option.name.slice(1)}</Link>;
                            })}
                        </div>
                    }
            </motion.li>
        );
    }
}
 
export default Dropdown;