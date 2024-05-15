import "./NavBar.css"
import {GoSectionViewCenter, GoSectionViewStart} from "./CommonNavLib";

function FeaturedProjectNavBar(){
    return(
        <section id="featured_project_nav_section" className="StandardNavBar">
            <nav className={"NavList"}>
                <div className="NavItem" onClick={()=>{GoSectionViewCenter("#project_palia_section")}}>PALIA</div>
                <div className="NavItem" onClick={()=>{GoSectionViewCenter("#project_gl_section")}}>GALAXY LEGEND</div>
                <div className="NavItem" onClick={()=>{GoSectionViewCenter("#project_ss_section")}}>SAINT SEIYA</div>
                <div className="NavItem" onClick={()=>{GoSectionViewCenter("#project_h3_section")}}>HOTEL FEVER</div>
                <div className="NavItem" onClick={()=>{GoSectionViewCenter("#project_merge_section")}}>MERGE ELF LAND</div>
            </nav>
        </section>
    );
}

export default FeaturedProjectNavBar;