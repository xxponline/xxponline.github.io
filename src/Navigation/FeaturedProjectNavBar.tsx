import "./NavBar.css"
import {GoSectionViewCenter, GoSectionViewStart} from "./CommonNavLib";

function FeaturedProjectNavBar(){
    return(
        <section id="featured_project_nav_section" className="StandardNavBar">
            <nav className={"NavList"}>
                <button className="NavItem" onClick={()=>{GoSectionViewCenter("#project_palia_section")}}>PALIA</button>
                <button className="NavItem" onClick={()=>{GoSectionViewCenter("#project_gl_section")}}>GALAXY LEGEND</button>
                <button className="NavItem" onClick={()=>{GoSectionViewCenter("#project_ss_section")}}>SAINT SEIYA</button>
                <button className="NavItem" onClick={()=>{GoSectionViewCenter("#project_h3_section")}}>HOTEL FEVER</button>
                <button className="NavItem" onClick={()=>{GoSectionViewCenter("#project_merge_section")}}>MERGE ELF LAND</button>
            </nav>

            <nav className={"NavList"}>
                <button className="NavItem" onClick={()=>{GoSectionViewStart("#welcome_section")}}>WELCOME</button>
                <button className="NavItem" onClick={()=>{GoSectionViewCenter("#skills_section")}}>SKILLS</button>
            </nav>
        </section>
    );
}

export default FeaturedProjectNavBar;