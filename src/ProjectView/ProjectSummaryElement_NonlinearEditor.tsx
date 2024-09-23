import React from "react";
import StandardButton from "../Common/StandardButton";
import commonUrl from "../CommonUrl";
import IProjectSummaryProps from "./ProjectSummaryProps";

class ProjectSummaryElement_NonlinearEditor extends React.Component<IProjectSummaryProps> {
    render() {
        const id_title : string = "Title_NonlinearEditor";
        const id_SummaryContent : string = "Content_NonlinearEditor";

        return (
            <section id="project_nonlinear_editor_section">
                <div className="StandardProjectSummaryElement">
                    <div id={id_title} className="StandardProjectSummaryElementTitle">
                        <div>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <div style={{
                                    color: "#594F42", fontSize: "40px",
                                    letterSpacing: ".2em", padding: "0 10px"
                                }}>
                                    Nonlinear Editor
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
                                <StandardButton className="SummaryEngineButton" onClick={this.props.onClickThumbnail}>
                                    <img style={{width: "320px", height: "180px", float: "right"}}
                                         src={require("../assets/past_project_resources/nonlinear_editor/screen_small.png")}/>
                                </StandardButton>
                            </div>

                            <p>This is a WYSIWYG editor designed for binding particle effects or other attachments to animations.</p>
                            <p>I recently discovered it in my code repository and let it adapt to Visual Effect Graph System</p>
                            <p>It appears to be quite useful for speeding up the workflow of projects that do not require complex animations.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProjectSummaryElement_NonlinearEditor;
