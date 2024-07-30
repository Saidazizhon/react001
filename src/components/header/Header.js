import React from "react"
import "./header.css"
import logo_rasm from "../assets/Screenshot_3 [Recovered] 1.svg"

function Header(){
    return (
        <div>
            <header>
                <section className="container">
                    <nav className="navbar">
                        <div className="nav_logo">
                        <img src={logo_rasm} alt="" />
                        </div>
                        <div className="nav_text">
                            <ul className="nav_items">
                                <li className="nav_item">HOME</li>
                                <li className="nav_item">PROJECT</li>
                                <li className="nav_item">SERVICES</li>
                                <li className="nav_item">ABOUT</li>
                                <li className="nav_item">BLOG</li>
                                <li className="nav_item">SHOP</li>
                                <li className="nav_item">CONTACT</li>
                            </ul>
                        </div>
                        <div className="nav_btn">
                        <button className="nav_button"><span className="nav_btn_span">Sign up</span></button>
                        </div>
                    </nav>
                </section>
            </header>
        </div>
    )
}

export default Header