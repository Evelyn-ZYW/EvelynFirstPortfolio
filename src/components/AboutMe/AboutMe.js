import React from 'react'
// import styled from "styled-components";
import portfolio from '../../utils/portfolio.png'
import { Typography } from '@material-ui/core'
import './AboutMe.scss'

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
        <img src={portfolio} alt="profile_photo" className="img" />
        <h1>Evelyn Zhao</h1>
        <div className="subtitle">
          <h3>Front End Developer</h3>
          <p>
            Versatile Front End Developer with a keen eye to detail. Experienced
            working with teams to produce impactful, leading-edge web/mobile
            applications that engage customers and deliver business results.
            Well-versed in design standards and user preferences.
          </p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AboutMe
