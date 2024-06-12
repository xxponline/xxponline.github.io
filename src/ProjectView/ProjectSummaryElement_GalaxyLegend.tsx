import React from "react";
import { ReactComponent as EngineLogo} from "../assets/icons/engine_framework/all-engine.svg";
import "./ProjectSummaryElement.css"
import ProjectPhotoSlider from "../OverlayView/ProjectPhotoSlider";
import BackgroundUri from "../assets/past_project_resources/galaxy_legend/bg.png";
import { ReactComponent as WebsiteIcon } from "../assets/icons/url-internet-svgrepo-com.svg";
import { ReactComponent as AppstoreLogo} from "../assets/icons/platform/apple-appstore.svg";
import { ReactComponent as GooglePlayLogo} from "../assets/icons/platform/googleplay.svg";
import commonUrl from "../CommonUrl";
import NoInteractButton from "../Common/NoInteractButton";
import StandardButton from "../Common/StandardButton";
import IProjectSummaryProps from "./ProjectSummaryProps";

class ProjectSummaryElement_GalaxyLegend extends React.Component<IProjectSummaryProps> {
    render() {
        const id_title : string = "Title_GL";
        const id_SummaryContent : string = "Content_GL";

        const webSiteUrl : string = 'https://galaxylegend.tap4fun.com/';
        const appStoreUrl : string = 'https://apps.apple.com/us/app/galaxy-legend/id599877646';
        const googlePlayUrl : string = 'https://play.google.com/store/apps/details?id=com.tap4fun.galaxyempire2_android';

        return (
            <section id="project_gl_section">
                <div className="StandardProjectSummaryElement">
                    <div id={id_title} className="StandardProjectSummaryElementTitle">
                        <div>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <div style={{
                                    color: "#594F42", fontSize: "40px",
                                    letterSpacing: ".2em", padding: "0 10px"
                                }}>
                                    GALAXY LEGEND
                                </div>
                            </div>
                        </div>
                    </div>


                    <div id={id_SummaryContent} style={{width: "100%", height: "500px", position: "relative"}}>
                        <div style={{
                            color: "#594F42", fontSize: "20px", backgroundColor: "#FFFFFFC0",
                            margin: "20px 10px 20px 100px", padding: "20px 20px",
                            position: "relative", zIndex: 1,
                            textAlign: "left"
                        }}>
                            <div style={{float: "right"}}>
                                <StandardButton className="SummaryEngineButton" onClick={this.props.onClickThumbnail}>
                                    <img style={{width: "320px", height: "180px", float: "right"}}
                                         src={require("../assets/past_project_resources/galaxy_legend/galaxy-legend-01.jpeg")}/>
                                </StandardButton>
                            </div>

                            <p>GalaxyLegend is multiplayer free-play mobile game. Players will fight in the universe.</p>
                            <p>I was the core member of development team.</p>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <p>The game is built by</p>
                                <NoInteractButton className="SummaryEngineButton">
                                    <EngineLogo/>
                                    <div style={{margin: "0 5px", fontSize: "20px"}}>In-House Engine</div>
                                </NoInteractButton>
                            </div>
                            <p>Visit following page to get detail information:</p>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <StandardButton className="SummaryEngineButton" onClick={() => {
                                    window.open(webSiteUrl)
                                }}>
                                    <WebsiteIcon/>
                                    <div style={{margin: "0 5px", fontSize: "20px"}}>Website</div>
                                </StandardButton>
                                <StandardButton className="SummaryEngineButton" onClick={() => {
                                    window.open(appStoreUrl)
                                }}>
                                    <AppstoreLogo/>
                                    <div style={{margin: "0 5px", fontSize: "20px"}}>AppStore</div>
                                </StandardButton>
                                <StandardButton className="SummaryEngineButton" onClick={() => {
                                    window.open(googlePlayUrl)
                                }}>
                                    <GooglePlayLogo/>
                                    <div style={{margin: "0 5px", fontSize: "20px"}}>GooglePlay</div>
                                </StandardButton>
                            </div>
                            <p></p>
                        </div>
                        <div style={{
                            position: "absolute", bottom: "5px", left: "0px",
                            minWidth: "200px", maxWidth: "450px", width: "45vw"
                        }}>
                            <img style={{width: "100%"}}
                                 src={require("../assets/past_project_resources/galaxy_legend/npc_1.png")}
                            />
                        </div>
                    </div>
                </div>
                {/*<div className="StandardProjectSummaryElement" style={{ background: `url(${BackgroundUri})`, backgroundSize: "100% auto"}}>*/}
                {/*    <div id={id_title} className="StandardProjectSummaryElementTitle">*/}
                {/*        <div>*/}
                {/*            <div style={{ display: "flex", alignItems:"center" }}>*/}
                {/*                <div style={{ color: "#594F42", fontSize: "40px",*/}
                {/*                    letterSpacing: ".2em", padding: "0 10px"*/}
                {/*                }}>*/}
                {/*                    GALAXY LEGEND*/}
                {/*                </div>*/}
                {/*                <div>*/}
                {/*                    <NoInteractButton className="SummaryEngineButtonWithoutClick">*/}
                {/*                        <EngineLogo/>*/}
                {/*                        <div style={{ fontSize: "15px"}}>Built by In-House Engine</div>*/}
                {/*                    </NoInteractButton>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div style={{ display: "flex" }}>*/}
                {/*                <StandardButton className="SummaryPublishButton" onClick={() => {window.open(webSiteUrl)}}>*/}
                {/*                    <WebsiteIcon/>*/}
                {/*                </StandardButton>*/}
                {/*                <StandardButton className="SummaryPublishButton" onClick={() => {window.open(appStoreUrl)}}>*/}
                {/*                    <AppstoreLogo/>*/}
                {/*                </StandardButton>*/}
                {/*                <StandardButton className="SummaryPublishButton" onClick={() => {window.open(googlePlayUrl)}}>*/}
                {/*                    <GooglePlayLogo/>*/}
                {/*                </StandardButton>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}


                {/*    <div id={id_SummaryContent} style={{width: "100%", position:"relative"}} >*/}
                {/*        <div style={{ marginLeft: "28vw", width: "60vw",*/}
                {/*            maxWidth: "900px", position: "relative", zIndex: 1 }}>*/}
                {/*            <div>*/}
                {/*                <ProjectPhotoSlider>*/}
                {/*                    <img src= {require("../assets/past_project_resources/galaxy_legend/galaxy-legend-01.jpeg")} alt="Palia_img_1" style={{ height: "100%" }}/>*/}
                {/*                    <img src= {require("../assets/past_project_resources/galaxy_legend/galaxy-legend-02.jpeg")} alt="Palia_img_2" style={{ height: "100%" }}/>*/}
                {/*                    <img src= {require("../assets/past_project_resources/galaxy_legend/galaxy-legend-03.jpeg")} alt="Palia_img_3" style={{ height: "100%" }}/>*/}
                {/*                    <img src= {require("../assets/past_project_resources/galaxy_legend/galaxy-legend-04.jpeg")} alt="Palia_img_4" style={{ height: "100%" }}/>*/}
                {/*                </ProjectPhotoSlider>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div style={{ position: "absolute", bottom: "-12px", width: "32vw", maxWidth: "500px"}} >*/}
                {/*            <img style={{ width: "100%" }}*/}
                {/*                 src={require("../assets/past_project_resources/galaxy_legend/npc_1.png")}*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </section>
        );
    }
}

export default ProjectSummaryElement_GalaxyLegend;
