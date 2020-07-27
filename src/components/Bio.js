/* eslint-disable react/prefer-stateless-function */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import picture from '../images/about-picture.jpg';

class Bio extends React.Component {
  render() {
    return (
      <div>
        <div className="line-numberss">
          <p>
            1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
            27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49
            50
          </p>
        </div>
        <div className="divider" />

        <div className="about-content-container">
          <div className="comments">
            <p>// This is a comment.</p>
            <p>// This is a comment.</p>
            <p>// This is a comment.</p>
          </div>

          <div className="about-main-section">
            <ul className="about-list">
              <li>
                <p>
                  <span style={{ color: '#FF97FF' }}>.name</span> &#123;{' '}
                </p>
                <p className="tag-info">Ian Adera</p>
                <p>&#125;</p>
              </li>
              <li>
                <p>
                  <span style={{ color: '#86FFF8' }}>.bio</span> &#123;{' '}
                </p>
                <p className="tag-info">
                  {' '}
                  I am full-stack developer, with a vast array of knowledge in
                  many different front end and backend languages to build highly
                  scalable and low latency web apps. I am very familiar with
                  multiple web architecture and capable of building any system.
                  With over 3+years of experience always seeking to work on
                  groundbreaking challenging projects.{' '}
                </p>
                <p>&#125;</p>
              </li>
              <li>
                <p>
                  <span className="function" >.language</span> &#123;{' '}
                </p>
                <p className="tag-info"><span className="property">Web</span> : <span className="string">Javascript</span>;</p>
                <p className="tag-info"><span className="property">Web</span> : <span className="string">Python</span>;</p>
                <p className="tag-info"><span className="property">Web</span> : <span className="string">Golang</span>;</p>
                <p>&#125;</p>
              </li>
              <li>
                <p>
                  <span className="function">.skills</span> &#123;{' '}
                </p>
                <p className="tag-info"><span className="property">Web</span> : <span className="string">HTML</span>;</p>
                <p className="tag-info"><span className="property">Web</span> : <span className="string">CSS</span>;</p>
                <p className="tag-info"><span className="property">Web</span> : <span className="string">JQuery</span>;</p>
                <p className="tag-info"><span className="property">Framework</span> : <span className="string">React</span>;</p>
                <p className="tag-info"><span className="property">Framework</span> : <span className="string">NodeJS</span>;</p>
                <p className="tag-info"><span className="property">Framework</span> : <span className="string">Django</span>;</p>
                <p className="tag-info"><span className="property">Framework</span> : <span className="string">Flask</span>;</p>
                <p className="tag-info"><span className="property">Framework</span> : <span className="string">MongoDB</span>;</p>
                <p className="tag-info"><span className="property">Framework</span> : <span className="string">PostgresSQL</span>;</p>
                <p>&#125;</p>
              </li>
              <li>
                <p>
                  <span className="function">.tools</span> &#123;{' '}
                </p>
                <p className="tag-info"><span className="property">Design</span> : <span className="string">Adobe illustrator</span>;</p>
                <p className="tag-info"><span className="property">Design</span> : <span className="string">Adobe Photoshop</span>;</p>
                <p className="tag-info"><span className="property">DevOps</span> : <span className="string">Docker</span>;</p>
                <p className="tag-info"><span className="property">DevOps</span> : <span className="string">Jenkins</span>;</p>
                <p className="tag-info"><span className="property">DevOps</span> : <span className="string">Ansible</span>;</p>
                <p className="tag-info"><span className="property">Cloud</span> : <span className="string">Heroku</span>;</p>
                <p className="tag-info"><span className="property">Cloud</span> : <span className="string">Azure</span>;</p>
                <p>&#125;</p>
              </li>
            </ul>

            {/* <div className="about-image-container">
              <img src={picture} />
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;
