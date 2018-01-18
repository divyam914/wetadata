import React from 'react';
import Profile from "./Profile.jsx"
import {
 BrowserRouter as Router,
 Route,
 Link
} from 'react-router-dom'

class SignIn extends React.Component{

  render(){
    return (<Router>
      <div>
        <input type="text"/>
        <input type="text"/>

      <Link to="/profile"><input type="submit" value="Sign In"/></Link>
      <Route path="/profile" component={Profile}/>

    </div>
  </Router>)
  }


}
export default SignIn;
