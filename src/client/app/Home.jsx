import React from 'react';
import Picture from "./Pictures/Home_background.png";

console.log('in Home.jsx')
class Home extends React.Component{


  render(){
    console.log('in home render')
    return(
      <div>
        <h1>WetaData</h1>
        <img src={Picture} alt="World Map"/>
        <p>paragraph description goes here</p>

      </div>)
  }


}
export default Home;
