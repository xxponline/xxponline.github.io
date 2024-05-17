import React from "react";
import commonUrl from "../CommonUrl";
import {ReactComponent as EngineLogo} from "../assets/icons/engine_framework/unity_logo.svg";
import {ReactComponent as WebsiteIcon} from "../assets/icons/url-internet-svgrepo-com.svg";
import {ReactComponent as AppstoreLogo} from "../assets/icons/platform/apple-appstore.svg";
import {ReactComponent as GooglePlayLogo} from "../assets/icons/platform/googleplay.svg";
import ProjectPhotoSlider from "./ProjectPhotoSlider";
import BackgroundUri from "../assets/past_project_resources/hotel_fever/bg.png";
import StandardButton from "../Common/StandardButton";

class ProjectSummaryElement_HotelFever extends React.Component {
    render() {
        const id_title : string = "Title_HotelFever";
        const id_SummaryContent : string = "Content_HotelFever";

        const appstoreUrl : string = 'https://apps.apple.com/us/app/hotel-fever-doorman-mania/id1529588261';
        const googlePlayUrl : string = 'https://play.google.com/store/apps/details?id=com.digitalkingdom.hotelfever';



        return (
            <section id="project_h3_section">
                <div className="StandardProjectSummaryElement" style={{ backgroundImage: `url(${BackgroundUri})`, backgroundSize: "100% auto"}}>
                    <div id={id_title} className="StandardProjectSummaryElementTitle">
                        <div>
                            <div style={{ display: "flex", alignItems:"center" }}>
                                <div style={{ color: "#594F42", fontSize: "40px",
                                    letterSpacing: ".2em", padding: "0 10px"
                                }}>
                                    HOTEL FEVER
                                </div>
                                <div>
                                    <StandardButton className="SummaryEngineButton" onClick={() => {window.open(commonUrl.unityUrl)}}>
                                        <EngineLogo/>
                                        <div style={{ fontSize: "15px"}}>Built by UnityEngine</div>
                                    </StandardButton>
                                </div>
                            </div>
                            <div style={{ display: "flex" }}>
                                <StandardButton className="SummaryPublishButton" onClick={() => {window.open(appstoreUrl)}}>
                                    <AppstoreLogo/>
                                </StandardButton>
                                <StandardButton className="SummaryPublishButton" onClick={() => {window.open(googlePlayUrl)}}>
                                    <GooglePlayLogo/>
                                </StandardButton>
                            </div>
                        </div>
                    </div>


                    <div id={id_SummaryContent} style={{width: "100%", position:"relative"}} >
                        <div style={{ marginLeft: "30vw", width: "60vw",
                            maxWidth: "900px", position: "relative", zIndex: 1 }}>
                            <div>
                                <ProjectPhotoSlider>
                                    <img src= {require("../assets/past_project_resources/hotel_fever/1.webp")} alt="hotel_fever_img_1" style={{ height: "100%" }}/>
                                    <img src= {require("../assets/past_project_resources/hotel_fever/2.webp")} alt="hotel_fever_img_2" style={{ height: "100%" }}/>
                                    <img src= {require("../assets/past_project_resources/hotel_fever/3.webp")} alt="hotel_fever_img_3" style={{ height: "100%" }}/>
                                    <img src= {require("../assets/past_project_resources/hotel_fever/4.webp")} alt="hotel_fever_img_3" style={{ height: "100%" }}/>
                                    <img src= {require("../assets/past_project_resources/hotel_fever/5.webp")} alt="hotel_fever_img_3" style={{ height: "100%" }}/>
                                    <img src= {require("../assets/past_project_resources/hotel_fever/6.webp")} alt="hotel_fever_img_3" style={{ height: "100%" }}/>
                                </ProjectPhotoSlider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProjectSummaryElement_HotelFever;