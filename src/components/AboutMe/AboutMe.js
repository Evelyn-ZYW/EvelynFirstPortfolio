import React from 'react';
import styled from 'styled-components';
// import portfolio from '../../utils/portfolio.png';
import { Typography } from '@material-ui/core';
import './AboutMe.scss';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AboutMe = () => {
  return (
    <Container>
      <div className="name">
        <h1>Hi, I'm Evelyn.</h1>

        <div className="subtitle">
          {/* <h3>Front End Developer</h3> */}
          <p>
            Versatile Front End Developer with a keen eye to detail. Experienced
            working with teams to produce impactful, leading-edge web/mobile
            applications that engage customers and deliver business results.
            Well-versed in design standards and user preferences.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
