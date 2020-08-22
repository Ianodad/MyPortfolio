import React, { Component } from 'react';
import "../css/menu.css"
// eslint-disable-next-line react/prefer-stateless-function
export class Menu extends Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <header id="header">
        <nav className="links pb-0" style={{"--items": 4}}>
          <a className="pb-1" href="#">index.html</a>
          <a href="#">about.html</a>
          <a href="#">projects.html</a>
          <a href="#">blog.html</a>
          <span className="line" />
        </nav>
      </header>
    );
  }
}

export default Menu;
