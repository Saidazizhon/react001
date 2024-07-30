import React from "react";
import "./dont.css"
function Dont() {
    return (
        <div className="container">
            <div className="dont__wrapper">
                <div className="dont__box">
                    <p className="dont__info">
                        DON’T FORGET TO SIGN UP
                    </p>
                    <div className="dont__hr">
                        <hr />
                    </div>
                    <p className="dont__desc">
                        Find out early about all upcoming promotions and new product releases with
                        our newsletter.
                    </p>
                </div>
                <div className="dont__inp">
                    <input className="inp" type="text" placeholder="Enter your email address....." />
                    <button className="button">SUBSCRIBE</button>
                </div>
            </div>
        </div>
    )
}
export default Dont