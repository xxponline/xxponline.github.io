import React from "react";
import BackgroundUri from "../assets/past_project_resources/merge_elf_land/bg.png";
import commonUrl from "../CommonUrl";
import {ReactComponent as EngineLogo} from "../assets/icons/engine_framework/unity_logo.svg";
import {ReactComponent as AppstoreLogo} from "../assets/icons/platform/apple-appstore.svg";
import {ReactComponent as GooglePlayLogo} from "../assets/icons/platform/googleplay.svg";
import ProjectPhotoSlider from "./ProjectPhotoSlider";

class ProjectSummaryElement_MergeElfLand extends React.Component {
    render() {
        const id_title : string = "Title_MergeElfLand";
        const id_SummaryContent : string = "Content_MergeElfLand";

        const appstoreUrl : string = 'https://apps.apple.com/us/app/merge-elfland-magic-merge/id1585664112';
        const googlePlayUrl : string = 'https://play.google.com/store/apps/details?id=com.greenwoodgame.elfland.merge.magic.dragon.match.mergegame';



        return (
            <section>
                <div className="StandardProjectSummaryElement" style={{ backgroundImage: `url(${BackgroundUri})`, backgroundSize: "100% auto"}}>
                    <div id={id_title} className="StandardProjectSummaryElementTitle">
                        <div  style={{
                            fontFamily: "Quicksand, Merriweather, serif", width: "80%", textAlign: "center",
                            borderRadius : 10 ,backgroundColor: "#FFFFFFA0",
                            display: "flex", justifyContent: "space-between", zIndex: 1, position: "relative"
                        }}>
                            <div style={{ display: "flex" }}>
                                <div style={{ color: "#594F42", height: "50%", fontSize: "40px",
                                    letterSpacing: ".2em", padding: "0 10px"
                                }}>
                                    MERGE ELF LAND
                                </div>
                                <button className="SummaryEngineButton" onClick={() => {window.open(commonUrl.unityUrl)}}>
                                    <EngineLogo/>
                                    <div style={{ fontSize: "15px"}}>Built by UnityEngine</div>
                                </button>
                            </div>
                            <div style={{ display: "flex" }}>
                                <button className="SummaryPublishButton" onClick={() => {window.open(appstoreUrl)}}>
                                    <AppstoreLogo/>
                                </button>
                                <button className="SummaryPublishButton" onClick={() => {window.open(googlePlayUrl)}}>
                                    <GooglePlayLogo/>
                                </button>
                            </div>
                        </div>
                    </div>


                    <div id={id_SummaryContent} style={{width: "100%", position:"relative"}} >
                        <div style={{ marginLeft: "10vw", width: "60vw",
                            maxWidth: "900px", position: "relative", zIndex: 1 }}>
                            <div>
                                <ProjectPhotoSlider>
                                    <img src= {require("../assets/past_project_resources/merge_elf_land/1.webp")} alt="elf_img_1" style={{ height: "100%" }}/>
                                    <img src= {require("../assets/past_project_resources/merge_elf_land/2.webp")} alt="elf_img_2" style={{ height: "100%" }}/>
                                    <img src= {require("../assets/past_project_resources/merge_elf_land/3.webp")} alt="elf_img_3" style={{ height: "100%" }}/>
                                    <img src= {require("../assets/past_project_resources/merge_elf_land/4.webp")} alt="elf_img_3" style={{ height: "100%" }}/>
                                    <img src= {require("../assets/past_project_resources/merge_elf_land/5.webp")} alt="elf_img_3" style={{ height: "100%" }}/>
                                </ProjectPhotoSlider>
                            </div>
                        </div>
                        <div style={{ position: "absolute", bottom: "0", right: "0",
                            minWidth: "200px", width: "35vw" }}>
                            <img style={{ width: "100%" }}
                                 src={require("../assets/past_project_resources/merge_elf_land/npc.png")}
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProjectSummaryElement_MergeElfLand;