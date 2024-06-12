import React from "react";

import "./NavBar.css"
import {GoSectionViewCenter, GoSectionViewStart} from "./CommonNavLib";
import StandardButton from "../Common/StandardButton";

function NavBar(){
    return(
        <div className="StandardNavBar">
            <div></div>
            <nav className={"NavList"}>
                <StandardButton onClick={()=>{GoSectionViewStart("#welcome_section")}}>WELCOME</StandardButton>
                <StandardButton onClick={()=>{GoSectionViewCenter("#skills_section")}}>SKILLS</StandardButton>
                <StandardButton onClick={()=>{GoSectionViewStart("#individual_nav_section")}}>INDIVIDUAL STUFF</StandardButton>
                <StandardButton onClick={()=>{GoSectionViewStart("#commercial_project_nav_section")}}>COMMERCIAL PROJECT</StandardButton>
            </nav>
        </div>
    );
}

export default NavBar;
