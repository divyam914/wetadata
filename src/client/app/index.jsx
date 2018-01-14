import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import Header from './Header.jsx';
class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React Project</p>
        <AwesomeComponent />
        <Header />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
render(<Header/>, document.getElementById());