import React from 'react';
import { Link } from "react-router-dom";
import Dropdown from './dropdown';
import { routes } from "../utils/routes";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                {routes.map((route, index) => {
                    if (Object.hasOwn(route, "href")) {
                        return (
                            <li key={route.title}>
                                <Link to={route.href}>{route.title}</Link>
                            </li>
                        );
                    } else {
                        return (
                            <Dropdown
                                key={route.title}
                                title={route.title}
                                options={route.options}
                                isHamburger={false}
                            />
                        );
                    }
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
