import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {(

      <div>
        <div id="topbar">
          <li><Link to='/'>WetaData</Link></li>
        </div>

        <header>
          <nav>
            <ul>
              <li><Link to='/'>HOME</Link></li>
              <li><Link to='/about'>ABOUT</Link></li>
              <li><Link to='/report'>REPORT</Link></li>
              li><Link to='/education'>EDUCATION</Link></li>
              li><Link to='/contact'>CONTACT US</Link></li>
              li><Link to='/sign_in'>SIGN IN</Link></li>
            </ul>
          </nav>
        </header>

        </div>
    )
}

export default Header;
