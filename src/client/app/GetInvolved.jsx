import React from 'react';
import Apply from "./Apply.jsx";
import Donate from "./Donate.jsx"
import {
 BrowserRouter as Router,
 Route,
 Link
} from 'react-router-dom'

class GetInvolved extends React.Component{

  render(){
    return(
    <Router>
      <div>
        <h1>Volunteer</h1>
        <p>List of our partners who need volunteers to collect data on the field</p>

        <h1>Donate</h1>
        <Link to="/donate">Check out our donate page here!</Link>

        <h1>Submit or Collect Data</h1>
        <p>Learn more about our Twilio reporting services</p>

        <h1>Apply to Be Our Partner!</h1>
        <p>Learn more about our current partners</p>
        <Link to="/apply"><input type="submit" value="Apply for Partnership!"/></Link>

         <Route path="/apply" component={Apply}/>
         <Route path="/donate" component={Donate}/>
      </div>
    </Router>)
  }


}
export default GetInvolved;
