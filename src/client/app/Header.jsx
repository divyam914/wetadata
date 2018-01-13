import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
const Header = () => {
  return(
      <div>
        <div id="topbar">
          <li src='www.google.com'>WetaData</li>
        </div>
        <header>
          <nav>
            <ul>
              <li src='www.google.com'>HOME</li>
              <li src='www.google.com'>ABOUT</li>
             <li src='www.google.com'>REPORT</li>
             <li src='www.google.com'>EDUCATION</li>
             <li src='www.google.com'>CONTACT US</li>
             <li src='www.google.com'>SIGN IN</li>
              {/*<li><Link to='/'>HOME</Link></li>
              <li><Link to='/about'>ABOUT</Link></li>
              <li><Link to='/report'>REPORT</Link></li>
              <li><Link to='/education'>EDUCATION</Link></li>
              <li><Link to='/contact'>CONTACT US</Link></li>
              <li><Link to='/sign_in'>SIGN IN</Link></li>*/}
            </ul>
          </nav>
        </header>
        </div>
    )
}
export default Header;