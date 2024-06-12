import React from "react";
import { ReactComponent as EngineLogo} from "../assets/icons/engine_framework/unreal_logo.svg";
import { ReactComponent as SteamLogo} from "../assets/icons/platform/steam.svg";
import { ReactComponent as NSLogo} from "../assets/icons/platform/nitendo-switch.svg";
import "./ProjectSummaryElement.css"
import { ReactComponent as WebsiteIcon } from "../assets/icons/url-internet-svgrepo-com.svg";
import commonUrl from "../CommonUrl";
import StandardButton from "../Common/StandardButton";
import IProjectSummaryProps from "./ProjectSummaryProps";

class ProjectSummaryElement_Palia extends React.Component<IProjectSummaryProps> {

    render() {
        const id_title : string = "Title_Palia";
        const id_SummaryContent : string = "Content_Palia";

        const webSiteUrl : string = 'https://palia.com/';
        const steamUrl : string = 'https://store.steampowered.com/app/2707930/Palia/';
        const nintendoUrl : string = 'https://www.nintendo.com/en-ca/store/products/palia-switch/';



        return (
            <section id="project_palia_section">
                <div className="StandardProjectSummaryElement">
                    <div id={id_title} className="StandardProjectSummaryElementTitle">
                        <div>
                            <div style={{ display: "flex", alignItems:"center" }}>
                                <div style={{ color: "#594F42" , fontSize: "40px",
                                    letterSpacing: ".2em", padding: "0 10px"
                                }}>
                                    PALIA
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
                                         src={require("../assets/past_project_resources/palia/1.webp")}/>
                                </StandardButton>
                            </div>

                            <p>Palia is multiplayer cozy game. Player can do craft, cook, fish, and farm with
                                friends. </p>
                            <p>I was the member of co-development team.</p>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <p>The game is built by</p>
                                <StandardButton className="SummaryEngineButton" onClick={() => {
                                    window.open(commonUrl.unrealUrl)
                                }}>
                                    <EngineLogo/>
                                    <div style={{margin: "0 5px", fontSize: "20px"}}>UnrealEngine</div>
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
                                    window.open(steamUrl)
                                }}>
                                    <SteamLogo/>
                                    <div style={{margin: "0 5px", fontSize: "20px"}}>SteamPage</div>
                                </StandardButton>
                                <StandardButton className="SummaryEngineButton" onClick={() => {
                                    window.open(nintendoUrl)
                                }}>
                                    <NSLogo/>
                                    <div style={{margin: "0 5px", fontSize: "20px"}}>NintendoStore</div>
                                </StandardButton>
                            </div>
                            <p></p>
                        </div>
                        <div style={{
                            position: "absolute", bottom: "5px", left: "0px",
                            minWidth: "200px", maxWidth: "700px", width: "45vw"
                        }}>
                            <img style={{width: "100%"}}
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
