import React from 'react';
import { Link } from "react-router-dom";
import Dropdown from './dropdown';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/theFinnishLapphund">The Finnish Lapphund</Link></li>
                <Dropdown
                    title={"Our Lapphunds"}
                    options={["males", "females"]}
                />
                <Dropdown
                    title={"Litters"}
                    options={["now", "later"]}
                />
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/news">News</Link></li>
            </ul>
        </nav>
    );
}
 
export default Navbar;