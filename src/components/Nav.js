/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable camelcase */
/* eslint-disable react/no-unused-state */
/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faFolder } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';

class Nav extends React.Component {
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
        index_classname: 'unclicked-file',
        about_classname: 'unclicked-file',
        portfolio_classname: 'clicked-file',
        blog_classname: 'unclicked-file',
      });
    } else if (pathname == "/about") {
      this.setState({
        portfolio_active: false,
        about_active: true,
        blog_active: false,
        index_classname: 'unclicked-file',
        about_classname: 'clicked-file',
        portfolio_classname: 'unclicked-file',
        blog_classname: 'unclicked-file',
      });
    } else if (pathname == "/blog") {
      this.setState({
        portfolio_active: false,
        about_active: false,
        blog_active: true,
        index_classname: 'unclicked-file',
        about_classname: 'unclicked-file',
        portfolio_classname: 'unclicked-file',
        blog_classname: 'clicked-file',
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
      <div className="navbar-container">
        <div className="navbar-list">
          <div className="folder-name-container">
            <FontAwesomeIcon
              icon={faAngleDown}
              style={{ color: '#C4C4C4', fontSize: '25px' }}
            />{' '}
            &nbsp;&nbsp;
            <FontAwesomeIcon
              icon={faFolder}
              style={{ color: '#536579', fontSize: '30px' }}
            />{' '}
            &nbsp;
            <p>Ian's Portfolio Site</p>
          </div>

          <div className="navbar-pages-container">
            <div className="navbar-pages">
              <FontAwesomeIcon
                icon={faFile}
                className={index_classname}
                style={{ fontSize: '30px', float: 'left' }}
              />
              &nbsp;&nbsp;&nbsp;
              <Link to="/">
                <p>index.html</p>
              </Link>
            </div>
            <div className="navbar-pages">
              <FontAwesomeIcon
                icon={faFile}
                className={about_classname}
                style={{ fontSize: '30px', float: 'left' }}
              />
              &nbsp;&nbsp;&nbsp;
              <Link to="/about">
                <p>about.html</p>
              </Link>
            </div>
            <div className="navbar-pages">
              <FontAwesomeIcon
                icon={faFile}
                className={portfolio_classname}
                style={{ fontSize: '30px', float: 'left' }}
              />
              &nbsp;&nbsp;&nbsp;
              <Link to="/portfolio">
                <p>projects.html</p>
              </Link>
            </div>
            <div className="navbar-pages">
              <FontAwesomeIcon
                icon={faFile}
                className={blog_classname}
                style={{ fontSize: '30px', float: 'left' }}
              />
              &nbsp;&nbsp;&nbsp;
              <Link to="/blog">
                <p>blog.html</p>
              </Link>
            </div>
            {/* <div className="navbar-pages">
                <FontAwesomeIcon icon={ faFile } className={contact_classname} style={{ fontSize:'30px', float:'left'}}/>
                &nbsp;&nbsp;&nbsp;
                <Link to="/"><p>contact.html</p></Link>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
