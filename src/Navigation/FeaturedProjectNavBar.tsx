import "./NavBar.css"
import {GoSectionViewCenter, GoSectionViewStart} from "./CommonNavLib";
import StandardButton from "../Common/StandardButton";
import React from "react";

function FeaturedProjectNavBar(){
    return(
        <section id="commercial_project_nav_section" className="StandardNavBar">
            <nav className={"NavList"}>
                <div style={{ padding: "5px", fontFamily: "Quicksand, Arial", fontSize: "22px",
                    display:"flex" ,alignItems: "center"}} >
                    Featured Commercial Project:
                </div>
                <StandardButton onClick={() => {
                    GoSectionViewCenter("#project_palia_section")
                }}>PALIA</StandardButton>
                <StandardButton onClick={() => {
                    GoSectionViewCenter("#project_gl_section")
                }}>GALAXY LEGEND</StandardButton>
                <StandardButton onClick={() => {
                    GoSectionViewCenter("#project_ss_section")
                }}>SAINT SEIYA</StandardButton>
                <StandardButton onClick={() => {
                    GoSectionViewCenter("#project_h3_section")
                }}>HOTEL FEVER</StandardButton>
                <StandardButton onClick={() => {
                    GoSectionViewCenter("#project_merge_section")
                }}>MERGE ELF LAND</StandardButton>
            </nav>

            <nav className={"NavList"}>
                <StandardButton onClick={()=>{GoSectionViewStart("#welcome_section")}}>WELCOME</StandardButton>
                <StandardButton onClick={()=>{GoSectionViewCenter("#skills_section")}}>SKILLS</StandardButton>
                <StandardButton onClick={()=>{GoSectionViewCenter("#individual_nav_section")}}>INDIVIDUAL STUFF</StandardButton>
            </nav>
        </section>
    );
}

export default FeaturedProjectNavBar;
