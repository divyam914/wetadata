/*
https://gist.github.com/Qt-dev/556e2e0558892c99bd81
*/

import React from 'react';
class NavBarLink extends React.Component{
  render() {
    return (
      <a href={this.props.url}>{this.props.text}</a>
    );
  }
}


export default NavBarLink;
