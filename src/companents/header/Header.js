import React, { useState } from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import navlogo from "../../assetes/Screenshot_3 [Recovered] 1.png"

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="container">
            <nav className="navbar">
                <div className="navbar__logo">
                    <img src={navlogo   } alt="" />
                </div>
                <div className={`nav__collect ${isMenuOpen ? "show" : ""}`}>
                    <ul className="navbar__collection">
                        <li className="navbar__item"><a className="item" href="#"><span>Home</span></a></li>
                        <li className="navbar__item"><a className="item" href="#"><span>Project</span></a></li>
                        <li className="navbar__item"><a className="item" href="#"><span>Services</span></a></li>
                        <li className="navbar__item"><a className="item" href="#"><span>About</span></a></li>
                        <li className="navbar__item"><a className="item" href="#"><span>Blog</span></a></li>
                        <li className="navbar__item"><a className="item" href="#"><span>Shop</span></a></li>
                        <li className="navbar__item"><a className="item" href="#"><span>Contact</span></a></li>
                    </ul>
                    </div>
                    <div className="navbar__btr">
                        <button class="btn navbar__button">Sign up</button>
                    </div>
                
                <div onClick={toggleMenu} className="navbar__menu">
                <GiHamburgerMenu />
                </div>
            </nav>
        </div>
    );
}

export default Header;
