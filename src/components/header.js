import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Logo from "../photos/logo2.png";
import HamburgerMenu from "./hamburgerMenu";
import { useState } from "react";
 
const Header = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="header">
            <div className={isOpen ? "header-logo-open" : "header-logo"}>
                <Link to="/">
                    <img src={Logo} alt="logo" />
                    <p>Lighthouse Lapphunds</p>
                </Link>
            </div>
            <Navbar />
            <HamburgerMenu isOpen={isOpen} setOpen={setOpen} />
        </div>
    );
};
 
export default Header;