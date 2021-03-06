import React, { Component } from 'react';
import SEO from '../components/seo';

import Nav from '../components/Nav';
import AboutPage from '../components/AboutPage';
import { Location } from '@reach/router';


class About extends Component {
  constructor() {
    super();
    this.state = {
      width: '',
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
  window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  }
  
  
  render() {
    const toggler = () => {
      const { width } = this.state;
      if (width < 800) {
        return (
          // eslint-disable-next-line react/jsx-filename-extension
          <div className="about-page">
            <SEO title="About" />
            <AboutPage />
          </div>
        );
      }

      return (
        <Location>{({ navigate, location }) => (
          <div className="about-page">
            <SEO title="About" />
            <Nav path={location} />
            <AboutPage />
          </div>
          )}
      </Location>
      );
    };

    return (
      <div className="about-page-container">
        {toggler()}
      </div>
    );
  }
}

export default About;
