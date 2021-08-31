import React from 'react';
import styled from 'styled-components';
// import portfolio from '../../utils/portfolio.png';
import { Typography } from '@material-ui/core';
import './AboutMe.scss';

const AboutMe = () => {
  return (
    <React.Fragment>
      <Typography
        variant="h2"
        display="block"
        align="center"
        style={{
          margin: '1rem',
          fontSize: '1.6rem',
          textTransform: 'uppercase',
        }}
      >
        {/*  <Element name="about-me" id="about-me">
                About Me
            </Element> */}
      </Typography>
      <div className="name">
        <h1>Hi, I'm Evelyn.</h1>

        <div className="subtitle">
          {/* <h3>Front End Developer</h3> */}
          <p>
            Many years ago an idea flashed into my mind that I could be a coder too. I thought that was only a dream.
          </p>
          <p>
            Even at the time I went back to school wanting to become a designer, I never thought I would be good at coding.
          </p>
          <p>
            I am not the best coder, but I always try my best.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
