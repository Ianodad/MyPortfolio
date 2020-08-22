import React, { Component } from 'react';
import SEO from '../components/seo';

import Nav from '../components/Nav';
import BlogMain from '../components/blogMain';

class blog extends Component {
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
          <div className="portfolio-page">
            <SEO title="blog" />
            <BlogMain />
          </div>
        );
      }
      return (
          <div className="portfolio-page">
            <SEO title="blog" />
            <Nav />
            <BlogMain />
          </div>
      );
    };

    return (
      <div className="portfolio-page-container">
        {toggler()}
      </div>
    );
  }
}

export default blog;
