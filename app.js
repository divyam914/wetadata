import React from 'react';
import {render} from 'react-dom';
//the error is happening because babel isn't configured correctly
import {Router, Route, hashHistory} from 'react-router';

//import AppHome from 'views/AppHome';

class App extends React.Component {

  constructor(){
    super()
  }

  render(){
    /*
    return(<Router history={hashHistory}>
        <Route path="/" component={AppHome}/>
    </Router>)
    */
    return(<p>Yo</p>)
  }
}

//export default App;

render(<App/>, document.getElementById('app'));