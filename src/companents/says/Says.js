import React from "react";
import "./says.css"
function Says() {
    return (
        <div className="container">
            <p className="says__p">TESTIMONIALS</p>
            <p className="says__info">Client says about us</p>
            <div className="says__wrapper">
                <div className="says__box">
                    <div className="says__content">
                        <div className="says__louis">
                            <p className="says__desc">Louis Saville </p>
                            <p> /CEO at Google inc</p>
                        </div>
                        <p className="says__lorem">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div className="says__box">
                    <div className="says__content">
                        <div className="says__louis">
                            <p className="says__desc">Louis Saville </p>
                            <p> /CEO at Google inc</p>
                        </div>
                        <p className="says__lorem">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Says