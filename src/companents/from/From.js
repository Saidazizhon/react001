import React from "react";
import "./from.css"
import fromfoto from "../../assetes/Mask Group (2).png"
import fromimg from "../../assetes/Mask Group (3).png"
function From (){
    return(
        <div className="from">
            <div className="container">
               <p className="from__desc">LETEST NEWS</p>
               <p className="from__info">From Our Blog</p>
               <div className="from__wrapper">
                <div className="from__content">
                    <div className="from__img">
                        <img src={fromfoto} alt="" />
                    </div>
                    <div className="from__collection">
                        <p className="from_interio">
                        2020 Interior Design Trends
                        </p>
                        <p className="from__lorem">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        incididunt ut labore et dolore magna aliqua.
                        </p>
                        <button className="from__btr">
                        CONTINUE READING....
                        </button>
                    </div>
                </div>
                <div className="from__content">
                    <div className="from__img">
                        <img src={fromimg} alt="" />
                    </div>
                    <div className="from__collection">
                        <p className="from_interio">
                        2020 Interior Design Trends
                        </p>
                        <p className="from__lorem">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        incididunt ut labore et dolore magna aliqua.
                        </p>
                        <button className="from__btr">
                        CONTINUE READING....
                        </button>
                    </div>
                </div>
               </div>
            </div>
        </div>
    )
}
export default From