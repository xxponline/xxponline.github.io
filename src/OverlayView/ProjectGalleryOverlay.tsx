import React from "react";
import {Modal} from "react-responsive-modal";
import "./ModalStyles.css"
//import "react-responsive-modal/styles.css";
import {OverlayViewState} from "./OverlayViewState";
import YouTube from "react-youtube";
import ProjectPhotoSlider from "./ProjectPhotoSlider";

interface GalleryProps {
    state: OverlayViewState,
    setState: (state: OverlayViewState) => void;
}

function ProjectGalleryOverlay(props: GalleryProps) {
    let content = null;

    switch (props.state) {
        case OverlayViewState.NonLinearEditor:
            content = <ProjectNonlinearEditor/>;
            break;
        case OverlayViewState.ProjectPalia:
            content = <ProjectPaliaGallery/>
            break;
        case OverlayViewState.ProjectGL:
            content = <ProjectGLGallery/>
            break;
        case OverlayViewState.ProjectSS:
            content = <ProjectSSGallery/>
            break;
        case OverlayViewState.ProjectHotel:
            content = <ProjectHotelGallery/>
            break;
        case OverlayViewState.ProjectMerge:
            content = <ProjectMergeGallery/>
            break;
        case OverlayViewState.CV_EN:
            console.log("en");
            content = <ProjectResume_En/>
            break;
        case OverlayViewState.CV_CN:
            console.log("cn");
            content = <ProjectResume_Cn/>
            break;
        case OverlayViewState.AIEditor:
            content = <ProjectAIEditor/>
            break;
    }

    return (
        <Modal closeOnOverlayClick={false} center={true}
               open={props.state != OverlayViewState.None}
               onClose={() => props.setState(OverlayViewState.None)}
        >
            {content}
        </Modal>
    );
}

export default ProjectGalleryOverlay;


function ProjectPaliaGallery() {
    return (
        <div style={{width: "1280px", padding: "30px"}}>
            <ProjectPhotoSlider>
                <img src={require("../assets/past_project_resources/palia/1.webp")} alt="img_1"
                     style={{height: "100%"}}/>
                <img src={require("../assets/past_project_resources/palia/2.webp")} alt="img_2"
                     style={{height: "100%"}}/>
                <img src={require("../assets/past_project_resources/palia/3.webp")} alt="img_3"
                     style={{height: "100%"}}/>
                <img src={require("../assets/past_project_resources/palia/4.webp")} alt="img_4"
                     style={{height: "100%"}}/>
                <img src={require("../assets/past_project_resources/palia/5.webp")} alt="img_5"
                     style={{height: "100%"}}/>
                <img src={require("../assets/past_project_resources/palia/6.webp")} alt="img_6"
                     style={{height: "100%"}}/>
            </ProjectPhotoSlider>
        </div>
    );
}

function ProjectGLGallery()
{
    return(
        <div style={{width: "1200px", padding: "30px"}}>
            <ProjectPhotoSlider>
                <img src={require("../assets/past_project_resources/galaxy_legend/galaxy-legend-01.jpeg")} alt="img_1"
                     style={{height: "100%"}}/>
                <img src={require("../assets/past_project_resources/galaxy_legend/galaxy-legend-02.jpeg")} alt="img_2"
                     style={{height: "100%"}}/>
                <img src={require("../assets/past_project_resources/galaxy_legend/galaxy-legend-03.jpeg")} alt="img_3"
                     style={{height: "100%"}}/>
                <img src={require("../assets/past_project_resources/galaxy_legend/galaxy-legend-04.jpeg")} alt="img_4"
                     style={{height: "100%"}}/>
            </ProjectPhotoSlider>
        </div>
    );
}

function ProjectSSGallery()
{
    return(
        <div style={{width: "1200px", padding: "30px"}}>
            <ProjectPhotoSlider>
                <img src={require("../assets/past_project_resources/saint_seiya/1.jpeg")} alt="img_1"
                     style={{height: "100%"}}/>
                <img src={require("../assets/past_project_resources/saint_seiya/2.jpeg")} alt="img_2"
                     style={{height: "100%"}}/>
                <img src={require("../assets/past_project_resources/saint_seiya/3.jpeg")} alt="img_3"
                     style={{height: "100%"}}/>
                <img src={require("../assets/past_project_resources/saint_seiya/4.jpeg")} alt="img_4"
                     style={{height: "100%"}}/>
                <img src={require("../assets/past_project_resources/saint_seiya/5.jpeg")} alt="img_5"
                     style={{height: "100%"}}/>
                <img src={require("../assets/past_project_resources/saint_seiya/6.jpeg")} alt="img_6"
                     style={{height: "100%"}}/>
                <img src={require("../assets/past_project_resources/saint_seiya/7.jpeg")} alt="img_7"
                     style={{height: "100%"}}/>
                <img src={require("../assets/past_project_resources/saint_seiya/8.jpeg")} alt="img_8"
                     style={{height: "100%"}}/>
                <img src={require("../assets/past_project_resources/saint_seiya/9.jpeg")} alt="img_9"
                     style={{height: "100%"}}/>
            </ProjectPhotoSlider>
        </div>
    );
}

function ProjectHotelGallery()
{
    return(
        <div style={{width: "1200px", padding: "30px"}}>
            <ProjectPhotoSlider>
                <img src={require("../assets/past_project_resources/hotel_fever/1.webp")} alt="img_1"
                     style={{height: "100%"}}/>
                <img src={require("../assets/past_project_resources/hotel_fever/2.webp")} alt="img_2"
                     style={{height: "100%"}}/>
                <img src={require("../assets/past_project_resources/hotel_fever/3.webp")} alt="img_3"
                     style={{height: "100%"}}/>
                <img src={require("../assets/past_project_resources/hotel_fever/4.webp")} alt="img_4"
                     style={{height: "100%"}}/>
                <img src={require("../assets/past_project_resources/hotel_fever/5.webp")} alt="img_5"
                     style={{height: "100%"}}/>
                <img src={require("../assets/past_project_resources/hotel_fever/6.webp")} alt="img_6"
                     style={{height: "100%"}}/>
                <img src={require("../assets/past_project_resources/hotel_fever/7.webp")} alt="img_7"
                     style={{height: "100%"}}/>
            </ProjectPhotoSlider>
        </div>
    );
}

function ProjectMergeGallery()
{
    return(
        <div style={{width: "1280px", padding: "30px"}}>
            <ProjectPhotoSlider>
                <img src={require("../assets/past_project_resources/merge_elf_land/1.webp")} alt="img_1"
                     style={{height: "100%"}}/>
                <img src={require("../assets/past_project_resources/merge_elf_land/2.webp")} alt="img_2"
                     style={{height: "100%"}}/>
                <img src={require("../assets/past_project_resources/merge_elf_land/3.webp")} alt="img_3"
                     style={{height: "100%"}}/>
                <img src={require("../assets/past_project_resources/merge_elf_land/4.webp")} alt="img_4"
                     style={{height: "100%"}}/>
                <img src={require("../assets/past_project_resources/merge_elf_land/5.webp")} alt="img_5"
                     style={{height: "100%"}}/>
            </ProjectPhotoSlider>
        </div>
    );
}

function ProjectResume_En() {
    return (
        <div style={{width: "1280px", height: "720px", padding: "30px"}}>
            <iframe src={require("../assets/past_project_resources/resume/V26_en.pdf")}
                    style={{width: '100%', height: '100%'}}/>
        </div>
    );
}

function ProjectResume_Cn() {
    return (
        <div style={{width: "1280px", height: "720px", padding: "30px"}}>
            <iframe src={require("../assets/past_project_resources/resume/V26_cn.pdf")}
                    style={{width: '100%', height: '100%'}}/>
        </div>
    );
}


function ProjectNonlinearEditor() {
    const opts = {
        height: '720',
        width: '1280',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    return (
        <div style={{padding: "30px"}}>
            <YouTube videoId="szNwH_OHYNo" opts={opts}/>
        </div>
    );
}

function ProjectAIEditor() {
    const opts = {
        height: '720',
        width: '1280',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    return (
        <div style={{padding: "30px"}}>
            <YouTube videoId="b3-DPEmz008" opts={opts}/>
        </div>
    );
}
