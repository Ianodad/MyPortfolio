/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Img from 'gatsby-image';

import { StaticQuery, graphql } from 'gatsby';

export default () => (
  <StaticQuery
    query={graphql`
      {
        blogs: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/blogs/" } }
        ) {
          edges {
            node {
              frontmatter {
                title
                date
                description
                link
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <header >
        <div className="line-numberss">
          <p className="block">
            1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
            27 28 29 30 31 32 33 34
          </p>
        </div>

        <div className="divider" />
        {data.blogs.edges.map(({ node }) => (
          <div className="blog-container" style={{marginLeft:"14%"}}>
            <div className="card-blog">
              <code className="ml-2">
                <span className="variable">const </span>
                <span className="function">blog </span>
                <span className="operator">= </span>
                <span>{'{'}</span>
                <div className="indent">
                  {' '}
                  <span className="property">Title</span>
                  <span className="operator">: </span>
                  <span className="string">{node.frontmatter.title}</span>
                  <span>,</span>
                </div>
                <div className="indent">
                  {' '}
                  <span className="property">Date</span>
                  <span className="operator">: </span>
                  <span className="string">{node.frontmatter.date}</span>
                  <span>,</span>
                </div>
                <div className="indent">
                  {' '}
                  <span className="property">Description</span>
                  <span className="operator">: </span>
                  <span className="string">{node.frontmatter.description}</span>
                  <span>,</span>
                </div>
                <div className="indent">
                  {' '}
                  <span className="property">Link</span>
                  <span className="operator">: </span>
                  <span className="string">
                    <a
                      className="thin"
                      href={node.frontmatter.link}
                      target="_blank"
                    >
                      Medium
                    </a>
                  </span>
                  <span />
                </div>
                <span>{'}'}</span>
              </code>
            </div>
          </div>
        ))}
      </header>
    )}
  />
);
