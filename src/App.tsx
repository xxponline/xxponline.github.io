import React from 'react';
import './App.css';
import Welcome from "./BaseInformation/Welcome";
import Skills from "./BaseInformation/Skills";
import NavBar from "./Navigation/NavBar";
import ProjectSummaryElement_Palia from "./ProjectView/ProjectSummaryElement_Palia";
import ProjectSummaryElement_GalaxyLegend from "./ProjectView/ProjectSummaryElement_GalaxyLegend";
import ProjectSummaryElement_SaintSeiya from "./ProjectView/ProjectSummaryElement_SaintSeiya";
import ProjectSummaryElement_HotelFever from "./ProjectView/ProjectSummaryElement_HotelFever";
import ProjectSummaryElement_MergeElfLand from "./ProjectView/ProjectSummaryElement_MergeElfLand";

import FeaturedProjectNavBar from "./Navigation/FeaturedProjectNavBar";
import IndividualStuffNavBar from "./Navigation/IndividualStuffNavBar";
import ProjectSummaryElement_NonlinearEditor from "./ProjectView/ProjectSummaryElement_NonlinearEditor";
import ProjectGalleryOverlay from "./OverlayView/ProjectGalleryOverlay";
import {OverlayViewState} from "./OverlayView/OverlayViewState";

function App() {
    const [ overlayState, setOverlayState ] = React.useState<OverlayViewState>(OverlayViewState.None);
    return (
      <div className="App">
          <link href='https://fonts.googleapis.com/css?family=Quicksand' rel='stylesheet'/>
          <ProjectGalleryOverlay state={overlayState} setState={setOverlayState}/>

          <NavBar/>
          <Welcome onClickResume={() => setOverlayState(OverlayViewState.CV)}/>
          <Skills/>
          <IndividualStuffNavBar/>
          <div style={{display: "flex", backgroundColor: "#FEF4E6"}}>
              <div style={{width: "50%"}}>
                  <ProjectSummaryElement_NonlinearEditor onClickThumbnail={() => setOverlayState(OverlayViewState.NonLinearEditor)}/>
              </div>
              <div style={{width: "50%"}}>

              </div>
          </div>
          <FeaturedProjectNavBar/>
          <div style={{display: "flex", backgroundColor: "#FEF4E6"}}>
              <div style={{width: "50%"}}>
                  <ProjectSummaryElement_Palia onClickThumbnail={()=>{setOverlayState(OverlayViewState.ProjectPalia)}}/>
              </div>
              <div style={{width: "50%"}}>
                  <ProjectSummaryElement_GalaxyLegend onClickThumbnail={()=>{setOverlayState(OverlayViewState.ProjectGL)}}/>
              </div>
          </div>
          <div style={{display: "flex", backgroundColor: "#FEF4E6"}}>
              <div style={{width: "50%"}}>
                  <ProjectSummaryElement_SaintSeiya onClickThumbnail={() => {setOverlayState(OverlayViewState.ProjectSS)}}/>
              </div>
              <div style={{width: "50%"}}>
                  <ProjectSummaryElement_HotelFever onClickThumbnail={() => {setOverlayState(OverlayViewState.ProjectHotel)}}/>
              </div>
          </div>
          <div style={{display: "flex", backgroundColor: "#FEF4E6"}}>
              <div style={{width: "50%"}}>
                  <ProjectSummaryElement_MergeElfLand onClickThumbnail={()=>{setOverlayState(OverlayViewState.ProjectMerge)}}/>
              </div>
              <div style={{width: "50%"}}>

              </div>
          </div>
          {/*<div></div>*/}
          {/*<div>React-Base Remote Editor</div>*/}
      </div>
    );
}

export default App;
