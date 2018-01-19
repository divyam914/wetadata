import React from 'react';
import Picture from "./Pictures/Home_background.png";

class Home extends React.Component{


  render(){
    return(
      <div>
        <h1>WetaData</h1>
        <img src={Picture} alt="World Map"/>
        <p>paragraph description goes here</p>

      </div>)
  }


}
export default Home;
