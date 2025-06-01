
import React, { useState } from 'react';
import {  Link } from "react-router-dom";

const Dropdown = ({ title, options }) => {
    const [isShown, setIsShown] = useState(false);
    let optionsList = [];
    for (let x = 0; x < options.length; x++) {
        optionsList.push( {
            url: "/" + options[x],
            name: options[x].charAt(0).toUpperCase() + options[x].slice(1)
        })
    }
    //console.log(optionsList)
        
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
 
export default Dropdown;