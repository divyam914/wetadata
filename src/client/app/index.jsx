import React from 'react';
import ReactDom from 'react-dom';
import NavBar from './navbar/navbar.jsx';

class App extends React.Component {
  render () {
    console.log("in app render")
    return (
      <div>
        <NavBar />
      </div>
    );
  }


}


export default App;
