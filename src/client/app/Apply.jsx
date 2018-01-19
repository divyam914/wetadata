import React from 'react';
import ApplicationSubmitted from "./ApplicationSubmitted.jsx"
import {
 BrowserRouter as Router,
 Route,
 Link
} from 'react-router-dom'

class Donate extends React.Component{

  render(){
    return (<Router>
      <div>
        <input type="text"/>
        <input type="text"/>

      <Link to="/applicationsubmitted"><input type="submit" value="Submit Application"/></Link>
      <Route path="/applicationsubmitted" component={ApplicationSubmitted}/>

    </div>
  </Router>)
  }


}
export default Donate;
