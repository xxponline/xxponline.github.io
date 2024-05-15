import React from "react";
import { ReactComponent as EngineLogo} from "../assets/icons/engine_framework/all-engine.svg";
import "./ProjectSummaryElement.css"
import ProjectPhotoSlider from "./ProjectPhotoSlider";
import BackgroundUri from "../assets/past_project_resources/galaxy_legend/bg.png";
import { ReactComponent as WebsiteIcon } from "../assets/icons/url-internet-svgrepo-com.svg";
import { ReactComponent as AppstoreLogo} from "../assets/icons/platform/apple-appstore.svg";
import { ReactComponent as GooglePlayLogo} from "../assets/icons/platform/googleplay.svg";
import commonUrl from "../CommonUrl";

class ProjectSummaryElement_GalaxyLegend extends React.Component {
    render() {
        const id_title : string = "Title_GL";
        const id_SummaryContent : string = "Content_GL";

        const webSiteUrl : string = 'https://galaxylegend.tap4fun.com/';
        const appStoreUrl : string = 'https://apps.apple.com/us/app/galaxy-legend/id599877646';
        const googlePlayUrl : string = 'https://play.google.com/store/apps/details?id=com.tap4fun.galaxyempire2_android';

        return (
            <section id="project_gl_section">
                <div className="StandardProjectSummaryElement" style={{ background: `url(${BackgroundUri})`, backgroundSize: "100% auto"}}>
                    <div id={id_title} className="StandardProjectSummaryElementTitle">
                        <div>
                            <div style={{ display: "flex" }}>
                                <div style={{ color: "#594F42", height: "50%", fontSize: "40px",
                                    letterSpacing: ".2em", padding: "0 10px"
                                }}>
                                    GALAXY LEGEND
                                </div>
                                <button className="SummaryEngineButtonWithoutClick">
                                    <EngineLogo/>
                                    <div style={{ fontSize: "15px"}}>Built by In-House Engine</div>
                                </button>
                            </div>
                            <div style={{ display: "flex" }}>
                                <button className="SummaryPublishButton" onClick={() => {window.open(webSiteUrl)}}>
                                    <WebsiteIcon/>
                                </button>
                                <button className="SummaryPublishButton" onClick={() => {window.open(appStoreUrl)}}>
                                    <AppstoreLogo/>
                                </button>
                                <button className="SummaryPublishButton" onClick={() => {window.open(googlePlayUrl)}}>
                                    <GooglePlayLogo/>
                                </button>
                            </div>
                        </div>
                    </div>


                    <div id={id_SummaryContent} style={{width: "100%", position:"relative"}} >
                        <div style={{ marginLeft: "28vw", width: "60vw",
                            maxWidth: "900px", position: "relative", zIndex: 1 }}>
                            <div>
                                <ProjectPhotoSlider>
                                    <img src= {require("../assets/past_project_resources/galaxy_legend/galaxy-legend-01.jpeg")} alt="Palia_img_1" style={{ height: "100%" }}/>
                                    <img src= {require("../assets/past_project_resources/galaxy_legend/galaxy-legend-02.jpeg")} alt="Palia_img_2" style={{ height: "100%" }}/>
                                    <img src= {require("../assets/past_project_resources/galaxy_legend/galaxy-legend-03.jpeg")} alt="Palia_img_3" style={{ height: "100%" }}/>
                                    <img src= {require("../assets/past_project_resources/galaxy_legend/galaxy-legend-04.jpeg")} alt="Palia_img_4" style={{ height: "100%" }}/>
                                </ProjectPhotoSlider>
                            </div>
                        </div>
                        <div style={{ position: "absolute", bottom: "5px", width: "32vw"}} >
                            <img style={{ width: "100%" }}
                                 src={require("../assets/past_project_resources/galaxy_legend/npc_1.png")}
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProjectSummaryElement_GalaxyLegend;