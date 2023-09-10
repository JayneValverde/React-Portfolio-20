import React from "react";
import Navigation from "../Navigation/Navigation"
import "./Header.css";

function Header(props) {
    const { currentTab, setCurentTab } = props;

    return (
        <header>
            <div>
                <h2>React Portfolio</h2>
            </div>
            <div>
                <Navigation
                    currentTab={currentTab}
                    setCurentTab={setCurentTab}
                    ></Navigation>
            </div>
        </header>
    );
}

export default Header; 