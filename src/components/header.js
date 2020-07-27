/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import InstagramSVG from '../Icons/InstagramSVG';
import LinkedInSVG from '../Icons/LinkedInSVG';
import MailSVG from '../Icons/MailSVG';
import GithubSVG from '../Icons/GithubSVG';

const Header = ({ siteTitle }) => (
  // <header
  //   style={{
  //     background: `rebeccapurple`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  <div className="header-container">
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
);

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header;
