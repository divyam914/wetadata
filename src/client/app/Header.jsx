import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Header = () => {
  return(
<div>
       <div id='topbar'>
         <li><a href='/'>WetaData</Link></li>
       </div>

       <header>
         <nav>
           <ul>
             <li><a href='/'>HOME</Link></li>
             <li><a href='/about'>ABOUT</Link></li>
             <li><a href='/report'>REPORT</Link></li>
             <li><a href='/education'>EDUCATION</Link></li>
             <li><a href='/contact'>CONTACT US</Link></li>
             <li><a href='/sign_in'>SIGN IN</Link></li>
           </ul>
         </nav>
       </header>

       </div>
  )
export default Header;
