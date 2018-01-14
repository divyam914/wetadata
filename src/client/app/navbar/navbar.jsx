/*
https://gist.github.com/Qt-dev/556e2e0558892c99bd81
*/
import React from 'react';
import NavBarItem from './navbarItem.jsx';

class NavBar extends React.Component{
   generateItem(item){
    return (<NavBarItem text={item.text} url={item.url} submenu={item.submenu} />)
  }

   render() {
    var items = this.props.items.map(this.generateItem);
    return (
      <ul className="menu">
      {items}
      </ul>
    );
  }
}

export default NavBar;
