import React from "react";
import "./footer.css"
import footerfoto from "../../assetes/Screenshot_3 [Recovered] 1.png"
import { FaFacebook } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
function Footer (){
    return(
        <div className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__box">
                        <div className="foter__logo">
                            <img src={footerfoto} alt="" />
                        </div>
                        <p className="footer__p">But i must explain to you all this mistaken
                        idea of dencouncing pleasure.</p>
                    </div>
                    <ul className="footer__collection no">
                        <b className="footer__b">Quick Links</b>
                        <li className="footer__item">
                            <a href="#"><span>About Our Company</span></a>
                        </li>
                        <li className="footer__item">
                            <a href="#"><span>Services WE provide</span></a>
                        </li>
                        <li className="footer__item">
                            <a href="#"><span>Career & Opportunity</span></a>
                        </li>
                        <li className="footer__item">
                            <a href="#"><span>Privacy & policy</span></a>
                        </li>
                        <li className="footer__item">
                            <a href="#"><span>Contact US</span></a>
                        </li>
                    </ul>
                    <ul className="footer__collection activ">
                        <b className="footer__b">Quick Links</b>
                        <li className="footer__item">
                            <a href="#"><span>About Our Company</span></a>
                        </li>
                        <li className="footer__item">
                            <a href="#"><span>Services WE provide</span></a>
                        </li>
                        <li className="footer__item">
                            <a href="#"><span>Career & Opportunity</span></a>
                        </li>
                        <li className="footer__item">
                            <a href="#"><span>Privacy & policy</span></a>
                        </li>
                        <li className="footer__item">
                            <a href="#"><span>Contact US</span></a>
                        </li>
                    </ul>
                    <ul className="footer__collection activ">
                        <b className="footer__b">Quick Links</b>
                        <li className="footer__item">
                            <a href="#"><span>About Our Company</span></a>
                        </li>
                        <li className="footer__item">
                            <a href="#"><span>Services WE provide</span></a>
                        </li>
                        <li className="footer__item">
                            <a href="#"><span>Career & Opportunity</span></a>
                        </li>
                        <li className="footer__item">
                            <a href="#"><span>Privacy & policy</span></a>
                        </li>
                        <li className="footer__item">
                            <a href="#"><span>Contact US</span></a>
                        </li>
                    </ul>
                    <ul className="footer__collection">
                        <b className="footer__b">Quick Links</b>
                        <div className="footer__icon">
                        <FaFacebook />
                        <AiFillLinkedin />
                        <IoLogoInstagram />
                        <FaTelegram />
                        </div>
                    </ul>
                </div>
                <hr />
                <p className="footer__theme">
                Copyright @ 2020 Brandoxide.all right reserved.
                </p>
            </div>
        </div>
    )
}
export default Footer