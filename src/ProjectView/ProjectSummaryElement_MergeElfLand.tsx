import React from "react";
import BackgroundUri from "../assets/past_project_resources/merge_elf_land/bg.png";
import commonUrl from "../CommonUrl";
import {ReactComponent as EngineLogo} from "../assets/icons/engine_framework/unity_logo.svg";
import {ReactComponent as AppstoreLogo} from "../assets/icons/platform/apple-appstore.svg";
import {ReactComponent as GooglePlayLogo} from "../assets/icons/platform/googleplay.svg";
import ProjectPhotoSlider from "../OverlayView/ProjectPhotoSlider";
import StandardButton from "../Common/StandardButton";
import IProjectSummaryProps from "./ProjectSummaryProps";

class ProjectSummaryElement_MergeElfLand extends React.Component<IProjectSummaryProps> {
    render() {
        const id_title : string = "Title_MergeElfLand";
        const id_SummaryContent : string = "Content_MergeElfLand";

        const appstoreUrl : string = 'https://apps.apple.com/us/app/merge-elfland-magic-merge/id1585664112';
        const googlePlayUrl : string = 'https://play.google.com/store/apps/details?id=com.greenwoodgame.elfland.merge.magic.dragon.match.mergegame';



        return (
            <section id="project_merge_section">
                <div className="StandardProjectSummaryElement">
                    <div id={id_title} className="StandardProjectSummaryElementTitle">
                        <div>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <div style={{
                                    color: "#594F42", fontSize: "40px",
                                    letterSpacing: ".2em", padding: "0 10px"
                                }}>
                                    MERGE ELF LAND
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
                                         src={require("../assets/past_project_resources/merge_elf_land/1.webp")}/>
                                </StandardButton>
                            </div>

                            <p>This is a free-play casual mobile game</p>
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
                                    window.open(appstoreUrl)
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
                            position: "absolute", bottom: "0", left: "50px",
                            minWidth: "50px", maxWidth: "500px", width: "45vw"
                        }}>
                            <img style={{width: "100%"}}
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
