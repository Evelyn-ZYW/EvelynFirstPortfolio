import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
// import portfolio from '../../utils/portfolio.png';
import './AboutMe.scss';
import "@lottiefiles/lottie-player";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
`;

const AboutMe = () => {
  const [display, setdisplay] = useState(null);
  setTimeout(()=>{
    setdisplay(true);
  }, 2000)
  return (
    <Container>
      <div className="name">
        <h1>Hey :) I'm Evelyn.</h1>

        <div className="subtitle">
          {/* <h3>Front End Developer</h3> */}
          <p>
            Enthusiastic Front End Developer with a keen eye to detail. Experienced
            working with teams to produce impactful, responsive web/mobile
            applications that engage customers and deliver business results.
            Well-versed in design standards and user preferences.
          </p>
        </div>
      </div>
      {display? 
          <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_jfchliut.json"  background="transparent" speed="1" loop autoplay mode="normal" id="scroll-down"></lottie-player> : null }

    </Container>
  );
};

export default AboutMe;
