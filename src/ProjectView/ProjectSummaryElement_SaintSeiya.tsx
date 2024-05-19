import React from "react";
import commonUrl from "../CommonUrl";
import {ReactComponent as EngineLogo} from "../assets/icons/engine_framework/unity_logo.svg";
import {ReactComponent as WebsiteIcon} from "../assets/icons/url-internet-svgrepo-com.svg";
import {ReactComponent as AppStoreIcon} from "../assets/icons/platform/apple-appstore.svg";
import ProjectPhotoSlider from "./ProjectPhotoSlider";
import BackgroundUri from "../assets/past_project_resources/saint_seiya/bg.png";
import StandardButton from "../Common/StandardButton";

class ProjectSummaryElement_SaintSeiya extends React.Component {

    render() {
        const id_title : string = "Title_SaintSeiya";
        const id_SummaryContent : string = "Content_SaintSeiya";

        const webSiteUrl : string = 'https://seiya.mobage.cn/home/';
        const appstoreUrl : string = 'https://apps.apple.com/cn/app/%E5%9C%A3%E6%96%97%E5%A3%AB%E6%98%9F%E7%9F%A2-%E9%87%8D%E7%94%9F/id1095086466';



        return (
            <section id="project_ss_section">
                <div className="StandardProjectSummaryElement" style={{ backgroundImage: `url(${BackgroundUri})`, backgroundSize: "100% auto"}}>
                    <div id={id_title} className="StandardProjectSummaryElementTitle">
                        <div>
                            <div style={{ display: "flex", alignItems:"center" }}>
                                <div style={{ color: "#594F42", fontSize: "40px",
                                    letterSpacing: ".2em", padding: "0 10px"
                                }}>
                                    SAINT SEIYA
                                </div>
                                <div>
                                    <StandardButton className="SummaryEngineButton" onClick={() => {window.open(commonUrl.unityUrl)}}>
                                        <EngineLogo/>
                                        <div style={{ fontSize: "15px"}}>Built by UnityEngine</div>
                                    </StandardButton>
                                </div>
                            </div>
                            <div style={{ display: "flex" }}>
                                <StandardButton className="SummaryPublishButton" onClick={() => {window.open(webSiteUrl)}}>
                                    <WebsiteIcon/>
                                </StandardButton>
                                <StandardButton className="SummaryPublishButton" onClick={() => {window.open(appstoreUrl)}}>
                                    <AppStoreIcon/>
                                </StandardButton>
                            </div>
                        </div>
                    </div>


                    <div id={id_SummaryContent} style={{width: "100%", position:"relative"}} >
                        <div style={{ marginLeft: "10vw", width: "60vw",
                            maxWidth: "900px", position: "relative", zIndex: 1 }}>
                            <div>
                                <ProjectPhotoSlider>
                                    <img src= {require("../assets/past_project_resources/saint_seiya/1.jpeg")} alt="ss_img_1" style={{ height: "100%" }}/>
                                    <img src= {require("../assets/past_project_resources/saint_seiya/2.jpeg")} alt="ss_img_2" style={{ height: "100%" }}/>
                                    <img src= {require("../assets/past_project_resources/saint_seiya/3.jpeg")} alt="ss_img_3" style={{ height: "100%" }}/>
                                    <img src= {require("../assets/past_project_resources/saint_seiya/4.jpeg")} alt="ss_img_4" style={{ height: "100%" }}/>
                                    <img src= {require("../assets/past_project_resources/saint_seiya/5.jpeg")} alt="ss_img_5" style={{ height: "100%" }}/>
                                    <img src= {require("../assets/past_project_resources/saint_seiya/6.jpeg")} alt="ss_img_6" style={{ height: "100%" }}/>
                                    <img src= {require("../assets/past_project_resources/saint_seiya/7.jpeg")} alt="ss_img_7" style={{ height: "100%" }}/>
                                    <img src= {require("../assets/past_project_resources/saint_seiya/8.jpeg")} alt="ss_img_8" style={{ height: "100%" }}/>
                                </ProjectPhotoSlider>
                            </div>
                        </div>
                        <div style={{ position: "absolute", bottom: "0", right: "0",
                            minWidth: "200px", width: "35vw", maxWidth: "550px" }}>
                            <img style={{ width: "100%" }}
                                 src={require("../assets/past_project_resources/saint_seiya/npc1.png")}
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProjectSummaryElement_SaintSeiya;