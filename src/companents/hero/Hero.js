import React from "react"
import "./hero.css";
import herfoto from "../../assetes/toa-heftiba-FV3GConVSss-unsplash.png"
function Hero() {
    return (
        <div className="container">
            <div className="hero__wrapper">
                <div className="hero__box">
                    <p className="hero__modern">MODERN INTERIOR</p>
                    <p className="hero__your">Create Your
                        Interior Design.</p>
                    <p className="hero__lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation.</p>
                    <button className="hero__btr">CONTACT</button>
                </div>
                <div className="hero__img">
                    <img className="hero__foto" src={herfoto} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Hero