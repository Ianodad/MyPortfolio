/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Header from './header';
import ProjectCards from './ProjectCards';

const Main = ({ data }) => (
  <div className="main-container">
    <Header />
    <ProjectCards />
  </div>
);

export default Main;
