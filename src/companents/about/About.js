import React from "react";
import "./About.css"
import abfoto from "../../assetes/Mask Group.png"
function About() {
    return (
        <div className="container">
            <div className="about__wrapper">
                <div className="about__img">
                    <img src={abfoto} alt="" />
                </div>
                <div className="about__box">
                    <b className="about__b">ABOUT US</b>
                    <p className="about__the">Interioris The Will
                        of An Epoch Mextreo</p>
                    < p className="about__there">There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form injected
                        humour, or randomised words which don't look even slightly
                        believable.If you are going to use a passage of Lorem Ipsum,
                        sure there isn't anything embarrassing hidden the middleof text.
                        All the Lorem Ipsum generators on the Internettend to repeat
                        predefined chunks as necessary,making this the first true
                        generator on the Internet.</p>
                    <button className="about__btr">LEARN MORE</button>
                </div>
            </div>
        </div>
    )
}
export default About