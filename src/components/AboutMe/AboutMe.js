import React, { useState } from "react";
import styled from "styled-components";
// import portfolio from '../../utils/portfolio.png';
import "./AboutMe.scss";
import "@lottiefiles/lottie-player";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: calc(100vh - 50px);
`;

const AboutMe = () => {
  const [display, setdisplay] = useState(false);

  setTimeout(() => {
    setdisplay(true);
  }, 2000);

  return (
    <Container>
      <div className="name">
        <h1>Hey :) I'm Evelyn.</h1>
        <div className="subtitle">
          {/* <h3>Front End Developer</h3> */}
          <p>
            Enthusiastic Front End Developer with a keen eye to detail.
            Experienced working with teams to produce impactful, web/mobile
            responsive applications that engage customers and deliver business
            results. Well-versed in design standards and user preferences.
          </p>
        </div>
      </div>
      <lottie-player
        src="https://assets5.lottiefiles.com/packages/lf20_jfchliut.json"
        background="transparent"
        speed="1"
        loop
        autoplay
        mode="normal"
        id={display ? "scroll-down" : "scroll-down-hide"}
      ></lottie-player>
    </Container>
  );
};

export default AboutMe;
