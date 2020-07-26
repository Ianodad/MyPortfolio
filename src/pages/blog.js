import React, { Component } from "react"
import SEO from "../components/seo"

import Nav from "../components/Nav"
import BlogMain from "../components/blogMain"

class blog extends Component {
  constructor() {
    super();
    this.state = {
      navToggle: false
    }
  }
  
  componentDidMount() {
    if(window.screen.availWidth < 800) {
      this.setState({ navToggle: true })
    }
    else {
      this.setState({ navToggle: false })
    }
  }
  
  render() {
    const toggler = () => {
      if(this.state.navToggle === true) {
        return(
          <div className="portfolio-page">
            <SEO title="blog" />
            <BlogMain />
          </div>
        );
      }
      else {
        return(
          <div className="portfolio-page">
            <SEO title="blog" />
            <Nav />
            <BlogMain />
          </div>
        );
      }
    }
    
    return (
      <div className="portfolio-page-container">
        {toggler()}
      </div>
    )
  }
}


export default blog;