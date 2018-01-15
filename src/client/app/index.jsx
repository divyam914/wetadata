import React from 'react';
import ReactDom from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
//import Header from './Header.jsx';
import NavBar from './navbar/navbar.jsx';
//import navbardata from './navbar/navbarData.js';

class App extends React.Component {
  render () {
    console.log("in app render")
    return (
      <div>
        <p> Hello React Project</p>
        <NavBar />
      </div>
    );
  }


}


export default App;
