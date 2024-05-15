import React from "react";
import { ReactComponent as EngineLogo} from "../assets/icons/engine_framework/unreal_logo.svg";
import { ReactComponent as SteamLogo} from "../assets/icons/platform/steam.svg";
import { ReactComponent as NSLogo} from "../assets/icons/platform/nitendo-switch.svg";
import "./ProjectSummaryElement.css"
import ProjectPhotoSlider from "./ProjectPhotoSlider";
import { ReactComponent as WebsiteIcon } from "../assets/icons/url-internet-svgrepo-com.svg";
import commonUrl from "../CommonUrl";

class ProjectSummaryElement_Palia extends React.Component {

    render() {
        const id_title : string = "Title_Palia";
        const id_SummaryContent : string = "Content_Palia";

        const webSiteUrl : string = 'https://palia.com/';
        const steamUrl : string = 'https://store.steampowered.com/app/2707930/Palia/';
        const nintendoUrl : string = 'https://www.nintendo.com/en-ca/store/products/palia-switch/';



        return (
            <section id="project_palia_section">
                <div className="StandardProjectSummaryElement" style={{ backgroundColor : "#FEF4E6" }}>
                    <div id={id_title} className="StandardProjectSummaryElementTitle">
                        <div>
                            <div style={{ display: "flex" }}>
                                <div style={{ color: "#594F42", height: "50%", fontSize: "40px",
                                    letterSpacing: ".2em", padding: "0 10px"
                                }}>
                                    PALIA
                                </div>
                                <button className="SummaryEngineButton" onClick={() => {window.open(commonUrl.unrealUrl)}}>
                                    <EngineLogo/>
                                    <div style={{ fontSize: "15px"}}>Built by UnrealEngine</div>
                                </button>
                            </div>
                            <div style={{ display: "flex" }}>
                                <button className="SummaryPublishButton" onClick={() => {window.open(webSiteUrl)}}>
                                    <WebsiteIcon/>
                                </button>
                                <button className="SummaryPublishButton" onClick={() => {window.open(steamUrl)}}>
                                    <SteamLogo/>
                                </button>
                                <button className="SummaryPublishButton" onClick={() => {window.open(nintendoUrl)}}>
                                    <NSLogo/>
                                </button>
                            </div>
                        </div>
                    </div>


                    <div id={id_SummaryContent} style={{width: "100%", position:"relative"}} >
                        <div style={{ marginLeft: "10vw", width: "60vw",
                            maxWidth: "900px", position: "relative", zIndex: 1 }}>
                            <div>
                                <ProjectPhotoSlider>
                                    <img src= {require("../assets/past_project_resources/palia/1.webp")} alt="Palia_img_1" style={{ height: "100%" }}/>
                                    <img src= {require("../assets/past_project_resources/palia/2.webp")} alt="Palia_img_2" style={{ height: "100%" }}/>
                                    <img src= {require("../assets/past_project_resources/palia/3.webp")} alt="Palia_img_3" style={{ height: "100%" }}/>
                                    <img src= {require("../assets/past_project_resources/palia/4.webp")} alt="Palia_img_3" style={{ height: "100%" }}/>
                                    <img src= {require("../assets/past_project_resources/palia/5.webp")} alt="Palia_img_3" style={{ height: "100%" }}/>
                                    <img src= {require("../assets/past_project_resources/palia/6.webp")} alt="Palia_img_3" style={{ height: "100%" }}/>
                                </ProjectPhotoSlider>
                            </div>
                        </div>
                        <div style={{ position: "absolute", bottom: "5px", width: "10vw"}} >
                            <img style={{ width: "100%" }}
                                 src={require("../assets/past_project_resources/palia/npc_1.png")}
                            />
                        </div>
                        <div style={{ position: "absolute", bottom: "5px", right: "0px",
                            minWidth: "200px", width: "50vw" }}>
                            <img style={{ width: "100%" }}
                                 src={require("../assets/past_project_resources/palia/npc_2.webp")}
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProjectSummaryElement_Palia;