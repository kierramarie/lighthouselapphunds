import React from 'react';
import { Link } from "react-router-dom";
import Dropdown from './dropdown';
import { routes } from "../utils/routes";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                {routes.map((route) => {
                    if (Object.hasOwn(route, "href")) {
                        return (
                            <li><Link to={route.href}>{route.title}</Link></li>
                        );
                    }
                    else {
                        return (
                            <Dropdown
                                title={route.title}
                                options={route.options}
                            />
                        );
                    }
                })}
            </ul>
        </nav>
    );
}
 
export default Navbar;