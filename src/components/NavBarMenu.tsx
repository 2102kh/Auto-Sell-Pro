import { NavLink } from 'react-router-dom'
import '../styles/NavBar.scss';
import { CgClose } from "react-icons/cg";
//import { RiMenu2Line } from "react-icons/ri";
import { FiAlignRight } from "react-icons/fi";
import { useState } from 'react';

const NavBarMenu = () => {
    const [isResponsive, setIsResponsive] = useState(false);
    const toggleNavbar = () => {
        setIsResponsive(!isResponsive);
    }

    return (
        <nav>
            <NavLink to={'/'} className='logo'>AutoCashDeal</NavLink>
            <ul className={`menu-list ${isResponsive ? 'active' : ""}`}>
                <li>
                    <NavLink to={'/about'}>About Company</NavLink>
                </li>
                <li>
                    <NavLink to={'/services'}>Our Services</NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to={''}>Auto</NavLink>
                </li>
            </ul>
            <div className="menu-icon" onClick={toggleNavbar}>
                {isResponsive ? <CgClose /> : <FiAlignRight />}

            </div>
        </nav>
    )
}

export default NavBarMenu