import React from "react";

import "./NavBar.css"

function NavBar(){
    return(
        <div className="StandardNavBar">
            <div></div>
            <nav className={"NavList"}>
                <div className="NavItem">ME</div>
                <div className="NavItem">SKILLS</div>
                <div className="NavItem">PORTFOLIO</div>
                {/*<div className="NavItem">EXPERIMENTAL</div>*/}
            </nav>
        </div>
    );
}

export default NavBar;