import React from "react";
import commonUrl from "../CommonUrl";
import {ReactComponent as EngineLogo} from "../assets/icons/engine_framework/unity_logo.svg";
import {ReactComponent as WebsiteIcon} from "../assets/icons/url-internet-svgrepo-com.svg";
import {ReactComponent as AppStoreIcon} from "../assets/icons/platform/apple-appstore.svg";
import ProjectPhotoSlider from "../OverlayView/ProjectPhotoSlider";
import BackgroundUri from "../assets/past_project_resources/saint_seiya/bg.png";
import StandardButton from "../Common/StandardButton";
import IProjectSummaryProps from "./ProjectSummaryProps";

class ProjectSummaryElement_SaintSeiya extends React.Component<IProjectSummaryProps> {

    render() {
        const id_title : string = "Title_SaintSeiya";
        const id_SummaryContent : string = "Content_SaintSeiya";

        const webSiteUrl : string = 'https://seiya.mobage.cn/home/';
        const appstoreUrl : string = 'https://apps.apple.com/cn/app/%E5%9C%A3%E6%96%97%E5%A3%AB%E6%98%9F%E7%9F%A2-%E9%87%8D%E7%94%9F/id1095086466';



        return (
            <section id="project_ss_section">
                <div className="StandardProjectSummaryElement">
                    <div id={id_title} className="StandardProjectSummaryElementTitle">
                        <div>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <div style={{
                                    color: "#594F42", fontSize: "40px",
                                    letterSpacing: ".2em", padding: "0 10px"
                                }}>
                                    SAINT SEIYA
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
                                         src={require("../assets/past_project_resources/saint_seiya/1.jpeg")}/>
                                </StandardButton>
                            </div>

                            <p>SaintSeiya, known in Japan as Saint Seiya Senki, is multiplayer free-play mobile game.</p>
                            <p>I led development team.</p>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <p>The game is built by</p>
                                <StandardButton className="SummaryEngineButton" onClick={() => {
                                    window.open(commonUrl.unityUrl)
                                }}>
                                    <EngineLogo/>
                                    <div style={{margin: "0 5px", fontSize: "20px"}}>UnityEngine</div>
                                </StandardButton>
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
                                    window.open(appstoreUrl)
                                }}>
                                    <AppStoreIcon/>
                                    <div style={{margin: "0 5px", fontSize: "20px"}}>AppStore</div>
                                </StandardButton>
                            </div>
                            <p></p>
                        </div>
                        <div style={{
                            position: "absolute", bottom: "5px", left: "0px",
                            minWidth: "200px", maxWidth: "500px", width: "45vw"
                        }}>
                            <img style={{width: "100%"}}
                                 src={require("../assets/past_project_resources/saint_seiya/npc1.png")}
                            />
                        </div>
                    </div>
                </div>

                {/*<div className="StandardProjectSummaryElement" style={{ backgroundImage: `url(${BackgroundUri})`, backgroundSize: "100% auto"}}>*/}
                {/*    <div id={id_title} className="StandardProjectSummaryElementTitle">*/}
                {/*        <div>*/}
                {/*            <div style={{ display: "flex", alignItems:"center" }}>*/}
                {/*                <div style={{ color: "#594F42", fontSize: "40px",*/}
                {/*                    letterSpacing: ".2em", padding: "0 10px"*/}
                {/*                }}>*/}
                {/*                    SAINT SEIYA*/}
                {/*                </div>*/}
                {/*                <div>*/}
                {/*                    <StandardButton className="SummaryEngineButton" onClick={() => {window.open(commonUrl.unityUrl)}}>*/}
                {/*                        <EngineLogo/>*/}
                {/*                        <div style={{ fontSize: "15px"}}>Built by UnityEngine</div>*/}
                {/*                    </StandardButton>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div style={{ display: "flex" }}>*/}
                {/*                <StandardButton className="SummaryPublishButton" onClick={() => {window.open(webSiteUrl)}}>*/}
                {/*                    <WebsiteIcon/>*/}
                {/*                </StandardButton>*/}
                {/*                <StandardButton className="SummaryPublishButton" onClick={() => {window.open(appstoreUrl)}}>*/}
                {/*                    <AppStoreIcon/>*/}
                {/*                </StandardButton>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}


                {/*    <div id={id_SummaryContent} style={{width: "100%", position:"relative"}} >*/}
                {/*        <div style={{ marginLeft: "10vw", width: "60vw",*/}
                {/*            maxWidth: "900px", position: "relative", zIndex: 1 }}>*/}
                {/*            <div>*/}
                {/*                <ProjectPhotoSlider>*/}
                {/*                    <img src= {require("../assets/past_project_resources/saint_seiya/1.jpeg")} alt="ss_img_1" style={{ height: "100%" }}/>*/}
                {/*                    <img src= {require("../assets/past_project_resources/saint_seiya/2.jpeg")} alt="ss_img_2" style={{ height: "100%" }}/>*/}
                {/*                    <img src= {require("../assets/past_project_resources/saint_seiya/3.jpeg")} alt="ss_img_3" style={{ height: "100%" }}/>*/}
                {/*                    <img src= {require("../assets/past_project_resources/saint_seiya/4.jpeg")} alt="ss_img_4" style={{ height: "100%" }}/>*/}
                {/*                    <img src= {require("../assets/past_project_resources/saint_seiya/5.jpeg")} alt="ss_img_5" style={{ height: "100%" }}/>*/}
                {/*                    <img src= {require("../assets/past_project_resources/saint_seiya/6.jpeg")} alt="ss_img_6" style={{ height: "100%" }}/>*/}
                {/*                    <img src= {require("../assets/past_project_resources/saint_seiya/7.jpeg")} alt="ss_img_7" style={{ height: "100%" }}/>*/}
                {/*                    <img src= {require("../assets/past_project_resources/saint_seiya/8.jpeg")} alt="ss_img_8" style={{ height: "100%" }}/>*/}
                {/*                </ProjectPhotoSlider>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div style={{ position: "absolute", bottom: "0", right: "0",*/}
                {/*            minWidth: "200px", width: "35vw", maxWidth: "550px" }}>*/}
                {/*            <img style={{ width: "100%" }}*/}
                {/*                 src={require("../assets/past_project_resources/saint_seiya/npc1.png")}*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </section>
        );
    }
}

export default ProjectSummaryElement_SaintSeiya;
