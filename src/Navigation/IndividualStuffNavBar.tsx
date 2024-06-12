import "./NavBar.css"
import {GoSectionViewCenter, GoSectionViewStart} from "./CommonNavLib";
import StandardButton from "../Common/StandardButton";
import React from "react";

function IndividualStuffNavBar() {
    return (
        <section id="individual_nav_section" className="StandardNavBar">
            <nav className={"NavList"}>
                <div style={{
                    padding: "5px", fontFamily: "Quicksand, Arial", fontSize: "22px",
                    display: "flex", alignItems: "center"
                }}>
                    Individual Stuff:
                </div>
                <StandardButton onClick={() => {
                    GoSectionViewCenter("#project_palia_section")
                }}>Nonlinear Editor & SampleAnimation-Bind Exhibit</StandardButton>
            </nav>

            <nav className={"NavList"}>
                <StandardButton onClick={() => {
                    GoSectionViewStart("#welcome_section")
                }}>WELCOME</StandardButton>
                <StandardButton onClick={() => {
                    GoSectionViewCenter("#skills_section")
                }}>SKILLS</StandardButton>
                <StandardButton onClick={()=>{
                    GoSectionViewCenter("#commercial_project_nav_section")
                }}>COMMERCIAL PROJECT</StandardButton>
            </nav>
        </section>
    );
}

export default IndividualStuffNavBar;
