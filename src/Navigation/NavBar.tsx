import React from "react";

import "./NavBar.css"
import {GoSectionViewCenter, GoSectionViewStart} from "./CommonNavLib";

function NavBar(){
    return(
        <div className="StandardNavBar">
            <div></div>
            <nav className={"NavList"}>
                <div className="NavItem" onClick={()=>{GoSectionViewStart("#welcome_section")}}>WELCOME</div>
                <div className="NavItem" onClick={()=>{GoSectionViewCenter("#skills_section")}}>SKILLS</div>
                <div className="NavItem" onClick={()=>{GoSectionViewStart("#featured_project_nav_section")}}>PORTFOLIO</div>
                {/*<div className="NavItem">EXPERIMENTAL</div>*/}
            </nav>
        </div>
    );
}

export default NavBar;