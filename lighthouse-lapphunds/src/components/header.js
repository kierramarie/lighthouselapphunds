import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Logo from "../photos/logo_offwhite.png";
import HamburgerMenu from "./hamburgerMenu";
 
const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <Link to="/">
                    <img src={Logo} alt="logo" />
                    <p>Lighthouse Lapphunds</p>
                </Link>
            </div>
            <Navbar />
            <HamburgerMenu />
            {/* <div className="hamburger-menu">
                <HamburgerMenuSvg />
            </div> */}
        </div>
    );
};
 
export default Header;