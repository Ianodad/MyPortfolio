/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import InstagramSVG from '../Icons/InstagramSVG';
import LinkedInSVG from '../Icons/LinkedInSVG';
import MailSVG from '../Icons/MailSVG';
import GithubSVG from '../Icons/GithubSVG';
import Menu from './Menu';

const Header = ({ siteTitle }) => {
  
  // <header
  //   style={{
  //     background: `rebeccapurple`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  const [width, setWidth] = useState(1000);

  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    const updateWindowDimensions = () => {
      // eslint-disable-next-line no-shadow
      const { width } = document.body.getBoundingClientRect();
      setWidth(width);
    };
    window.addEventListener('resize', updateWindowDimensions);

    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, [width]);

  return (
  <div className="header-container">

    { width < 800 &&
      <Menu/>
    }

    <div className="user-info-container">
      <div className="user-info">
        <p>Ian Adera</p>
        <p>FullStack Developer</p>
      </div>
      <div className="x-icon">
        <FontAwesomeIcon
          icon={faTimes}
          style={{
            color: '#C4C4C4',
            fontSize: '20px',
            fontWeight: '0px',
            display: 'inline-block',
          }}
        />
      </div>
    </div>

    <div className="icons-container">
      <a href="ianodad@gmail.com">
        <MailSVG />
      </a>

      <a href="https://www.instagram.com/ianodad/">
        <InstagramSVG />
      </a>

      <a href="https://www.linkedin.com/in/ian-odhiambo/">
        <LinkedInSVG />
      </a>

      <a href="https://github.com/Ianodad">
        <GithubSVG />
      </a>
    </div>
  </div>

  // </header>
 )};

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header;
