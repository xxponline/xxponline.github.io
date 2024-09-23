import StandardButton from "../Common/StandardButton";
import React from "react";
import IProjectSummaryProps from "./ProjectSummaryProps";

export function ProjectSummaryElement_AIEditor(props: IProjectSummaryProps)
{
    const id_title : string = "Title_AI_Editor";
    const id_SummaryContent : string = "Content_AI_Editor";

    return (
        <section id="project_ai_editor_section">
            <div className="StandardProjectSummaryElement">
                <div id={id_title} className="StandardProjectSummaryElementTitle">
                    <div>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <div style={{
                                color: "#594F42", fontSize: "40px",
                                letterSpacing: ".2em", padding: "0 10px"
                            }}>
                                Individual AI Editor
                            </div>
                        </div>
                    </div>
                </div>


                <div id={id_SummaryContent} style={{width: "100%", height: "500px", position: "relative"}}>
                    <div style={{
                        color: "#594F42", fontSize: "20px", backgroundColor: "#FFFFFFC0",
                        margin: "20px 10px 20px 100px", padding: "20px 20px",
                        position: "relative", zIndex: 1,
                        textAlign: "left", minHeight: "400px"
                    }}>
                        <div style={{float: "right"}}>
                            <StandardButton className="SummaryEngineButton" onClick={props.onClickThumbnail}>
                                <img style={{width: "320px", height: "180px", float: "right"}}
                                     src={require("../assets/past_project_resources/ai_editor/ai_editor.png")}/>
                            </StandardButton>
                        </div>

                        <p>This is my individual AI Editor witch designed to be a collaborative ai editor.</p>
                        <p>Recently I finished the first functional version</p>
                        <p>The version version include the FrontEnd based on React and the BackEnd based on golang/Gin. At the same time the unity runtime/editor plugin is available.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
