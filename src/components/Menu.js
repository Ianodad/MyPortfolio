import React, { Component } from 'react';
import "../css/menu.css"
// eslint-disable-next-line react/prefer-stateless-function
import { Link } from 'gatsby';


import { useLocation } from "@reach/router"

class Menu extends Component {

  constructor() {
    super();
    this.state = {
      portfolio_active: true,
      about_active: false,
      blog_active: false,
      index_classname: 'unclicked-file',
      about_classname: 'unclicked-file',
      portfolio_classname: 'clicked-file',
      blog_classname: 'unclicked-file',
    };
  }

  componentDidMount() {
    // console.log(window.location.pathname)
    // console.log(window.location.href.includes('portfolio'))
    const {pathname}= this.props.path
    // console.log(pathname)
    if (pathname == "/portfolio") {
      this.setState({
        portfolio_active: true,
        about_active: false,
        blog_active: false,
        index_classname: '',
        about_classname: '',
        portfolio_classname: 'select',
        blog_classname: '',
      });
    } else if (pathname == "/about") {
      this.setState({
        portfolio_active: false,
        about_active: true,
        blog_active: false,
        index_classname: '',
        about_classname: 'select',
        portfolio_classname: '',
        blog_classname: '',
      });
    } else if (pathname == "/blog") {
      this.setState({
        portfolio_active: false,
        about_active: false,
        blog_active: true,
        index_classname: '',
        about_classname: '',
        portfolio_classname: '',
        blog_classname: 'select',
      });
    }
  }



  render() {
    const {
      index_classname,
      portfolio_classname,
      about_classname,
      blog_classname,
    } = this.state;
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <header id="header">
        <nav className="links pb-0" style={{"--items": 4}}>
          <Link to="/">
            <a className={index_classname} href="#">index.html</a>
          </Link>
          <Link to="/about">
            <a className={about_classname} href="#">about.html</a>
          </Link>
          <Link to="/portfolio">
            <a className={portfolio_classname} href="#">projects.html</a>
          </Link>
          <Link to="/blog">
            <a className={blog_classname} href="#">blog.html</a>
          </Link>
          <span className="line" />
        </nav>
      </header>
    );
  }
}

export default Menu;
