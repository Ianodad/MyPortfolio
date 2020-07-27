/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Img from 'gatsby-image';

import { StaticQuery, graphql } from 'gatsby';

export default () => (
  <StaticQuery
    query={graphql`
      {
        projects: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/projects/" } }
        ) {
          edges {
            node {
              frontmatter {
                type
                title
                description
                tools
                repository
                website
                image
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <header>
        <div className="line-numberss">
          <p>
            1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
            27 28 29 30 31 32 33 34
          </p>
        </div>

        <div className="divider"/>

        {data.projects.edges.map(({ node }) => (
          <div className="project-container">
            <div className="project-leftside">
              <div className="project-text">
                <p className="project-type">{node.frontmatter.type}</p>
                <p className="project-title">{node.frontmatter.title}</p>
                <p className="project-excerpt">
                  {node.frontmatter.description}
                </p>
              </div>
              <div className="project-link">
                <a
                  className="thin"
                  href={node.frontmatter.repository}
                  target="_blank"
                >
                  Github
                </a>
                <a
                  className="thin"
                  href={node.frontmatter.repository}
                  target="_blank"
                >
                  Website
                </a>
              </div>
              <div className="project-tools">
                <p>{node.frontmatter.tools}</p>
              </div>
            </div>

            <div className="project-image-container">
            {/* <img src={node.frontmatter.image} alt="Logo" /> */}
}
              {/* <Img
                className="project-image"
                sizes={node.frontmatter.image}
              /> */}
            </div>
          </div>
        ))}
      </header>
    )}
  />
);
