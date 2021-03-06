/*
https://gist.github.com/Qt-dev/556e2e0558892c99bd81
*/
import React from 'react';
import Home from "../Home.jsx";
import About from "../About.jsx";
import Report from "../Report.jsx";
import Education from "../Education.jsx";
import Contact from "../Contact.jsx";
import SignIn from "../SignIn.jsx";
import Donate from '../Donate.jsx'
import GetInvolved from "../GetInvolved.jsx"
import {
 BrowserRouter as Router,
 Route,
 Link
} from 'react-router-dom'

class NavBar extends React.Component{
   /*generateItem(item){
    return (<NavBarItem text={item.text} url={item.url} submenu={item.submenu} />)
  }*/

   /*render() {
    var items = this.props.items.map(this.generateItem);
    return (
      <ul className="menu">
      {items}
      </ul>
    );
  }*/

  render(){
    console.log("in navbar render")
    return(
      <Router>
       <div>

            <div>
            <Link to="/donate"><input type="submit" value="Donate"/></Link>

            <Link to="/getinvolved"><input type="submit" value="Get Involved"/></Link>
            </div>

            <div>
             <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/report">Report</Link></li>
               <li><Link to="/education">Education</Link></li>
               <li><Link to="/contact">Contact</Link></li>
               <li><Link to="/signin">Sign In</Link></li>
             </ul>

             <hr/>

             <Route exact path="/" component={Home}/>
             <Route path="/about" component={About}/>
             <Route path="/report" component={Report}/>
             <Route path="/education" component={Education}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/signin" component={SignIn}/>
             <Route path="/donate" component={Donate}/>
             <Route path="/getinvolved" component={GetInvolved}/>
             </div>

       </div>
     </Router>
   )
  }
}

export default NavBar;
