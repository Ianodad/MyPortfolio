import React from 'react'
import Img from "gatsby-image"

import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
    {
      blogs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/blogs/"}}
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
    render={data => (
      <header>

          <div className="line-numbers">
            <p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34</p>
          </div>

        <div className="divider">
        </div>
       
        {data.blogs.edges.map(({ node }) => (
        <div className="card">
        <div className="card-back">
          <div className="line-numbers">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
          </div><code><span className="variable">const </span><span className="function">blog </span><span className="operator">= </span><span>{'{'}</span>
            <div className="indent"> <span className="property">date</span><span className="operator">: </span><span className="string">{node.frontmatter.title}</span><span>,</span></div>
            <div className="indent"> <span className="property">title</span><span className="operator">: </span><span className="string">{node.frontmatter.date}</span><span>,</span></div>
            <div className="indent"> <span className="property">description</span><span className="operator">: </span><span className="string">{node.frontmatter.description}</span><span>,</span></div>
            <div className="indent"> <span className="property">link</span><span className="operator">: </span><span className="string">{node.frontmatter.link}</span><span>,</span></div>
            <span>{'}'}</span>
          </code>
        </div>
        <div className="card-front">
          <div className="line-numbers">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
          </div><code><span className="variable">this</span><span>.</span><span className="method">addEventListener</span><span>(</span><span className="string">'mouseover'</span><span>, </span><span className="function">() =&gt; </span><span>{'{'} </span>
            <div className="indent"><span className="variable">this</span><span>.</span><span className="property">flipCard </span><span>= </span><span className="boolean">true</span><span>;</span></div><span>{'}'});</span>
          </code>
        </div>
       </div>
      ))}
      </header>
    )}
  />
)