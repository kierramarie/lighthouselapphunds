import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Logo from "../photos/logo_offwhite.png";
 
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
        </div>
    );
};
 
export default Header;