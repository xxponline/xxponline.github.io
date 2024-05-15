import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectSummaryElement from "./ProjectView/ProjectSummaryElement_Palia";
import Welcome from "./BaseInformation/Welcome";
import Skills from "./BaseInformation/Skills";
import NavBar from "./Navigation/NavBar";
import ProjectSummaryElement_Palia from "./ProjectView/ProjectSummaryElement_Palia";
import ProjectSummaryElement_GalaxyLegend from "./ProjectView/ProjectSummaryElement_GalaxyLegend";
import ProjectSummaryElement_SaintSeiya from "./ProjectView/ProjectSummaryElement_SaintSeiya";
import ProjectSummaryElement_HotelFever from "./ProjectView/ProjectSummaryElement_HotelFever";
import ProjectSummaryElement_MergeElfLand from "./ProjectView/ProjectSummaryElement_MergeElfLand";
import FeaturedProjectNavBar from "./Navigation/FeaturedProjectNavBar";

function App() {
  return (

      <div className="App">
          <link href='https://fonts.googleapis.com/css?family=Quicksand' rel='stylesheet' />
          <NavBar/>

          <Welcome/>
          <Skills/>
          <FeaturedProjectNavBar/>
          <ProjectSummaryElement_Palia />
          <ProjectSummaryElement_GalaxyLegend/>
          <ProjectSummaryElement_SaintSeiya/>
          <ProjectSummaryElement_HotelFever/>
          <ProjectSummaryElement_MergeElfLand/>
      </div>
  );
}

export default App;
