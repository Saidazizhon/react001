import React from "react";
import "./Service.css"
import serfoto from "../../assetes/sr.png"
import serimg from "../../assetes/sd.png"
function Service() {
    return (
        <div className="container">
            <div className="what">
                <p className="service__p">WHAT WE DO</p>
                <p className="service__our">Our Service</p>
            </div>
            <div className="service__wrapper">
                <div className="service__box">
                    <div className="servics__img">
                    <img className="foto" src={serfoto} alt="" />
                    </div>
                    <div className="service__content">
                        <p className="service__info">Interior Design</p>
                        <p className="service__desc">Lorem ipsum dolor amet consectetur
                            adipiscing elit sed eiusmod tempor
                            incididunt ut labore.</p>
                    </div>
                </div>
                <div className="service__box">
                    <div className="servics__img">
                    <img className="foto" src={serfoto} alt="" />
                    </div>
                    <div className="service__content">
                        <p className="service__info">Interior Design</p>
                        <p className="service__desc">Lorem ipsum dolor amet consectetur
                            adipiscing elit sed eiusmod tempor
                            incididunt ut labore.</p>
                    </div>
                </div>
                <div className="service__box">
                    <div className="servics__img">
                    <img className="foto" src={serimg} alt="" />
                    </div>
                    <div className="service__content">
                        <b className="service__info">Interior Design</b>
                        <p className="service__desc">Lorem ipsum dolor amet consectetur
                            adipiscing elit sed eiusmod tempor
                            incididunt ut labore.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Service