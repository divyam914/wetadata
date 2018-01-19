import React from 'react';
import Picture from "./Pictures/WhatWeDo.png";
class About extends React.Component{

  render(){
    return <div>
    <h1>Why WetaData?</h1>
    <p>Waterborne diarrhoreal diseases are responsible for 2 million deaths each year, with the majority occuring in children under 5. There already are multiple organizations who are working their hardest to provide clean water resources. </p>
    <p>However, the lack of access to data and information across all agencies, NGO’s and members of nations is real, cricitcal problem. We want to fill that need and ensure resources are being efficiently delivered to the areas in need of most assistance. We believe creating an open, shared database would be ideal.</p>
    <img src={Picture} alt="Diagram"/>
    </div>
  }


}
export default About;
