import React from "react";

import "./NavBar.css"
import {GoSectionViewCenter, GoSectionViewStart} from "./CommonNavLib";

function NavBar(){
    return(
        <div className="StandardNavBar">
            <div></div>
            <nav className={"NavList"}>
                <button className="NavItem" onClick={()=>{GoSectionViewStart("#welcome_section")}}>WELCOME</button>
                <button className="NavItem" onClick={()=>{GoSectionViewCenter("#skills_section")}}>SKILLS</button>
                <button className="NavItem" onClick={()=>{GoSectionViewStart("#featured_project_nav_section")}}>PORTFOLIO</button>
            </nav>
        </div>
    );
}

export default NavBar;