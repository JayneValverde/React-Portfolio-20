import React from "react";
import "./Homepage.css";

function Homepage() {
    return (
        <div className="homepage-containter">
            
            <div className="hero-section">
                <h1 style={{ fontSize: "4rem" }}>JAYNÉ M. VALVERDE</h1>
            </div>
                <div className="port-statement">
                    <h2>Welcome Welcome Welcome Welcome Welcome Welcome Welcome Welcome</h2>
                    <h2>Welcome Welcome Welcome Welcome Welcome Welcome Welcome Welcome</h2>
                    <h2>Welcome Welcome Welcome Welcome Welcome Welcome Welcome Welcome</h2>
                    <h2>Welcome Welcome Welcome Welcome Welcome Welcome Welcome Welcome</h2>
                </div>

                <div className="hero-image">
                    <img
                        src={require('../../assets/images/Jean-paul.png')}
                        alt="Jean-Paul"
                        className="Photo"
                        height="auto"
                        width="100%"
                    />
                </div>
            
        </div>



        
    )
}


export default Homepage;