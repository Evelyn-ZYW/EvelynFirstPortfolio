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
  width: 100%;
  min-height: 100vh;
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
            Versatile Front End Developer with a keen eye to detail. Experienced
            working with teams to produce impactful, leading-edge web/mobile
            applications that engage customers and deliver business results.
            Well-versed in design standards and user preferences.
          </p>
        </div>
      </div>
      {display? 
          <lottie-player src="https://assets6.lottiefiles.com/datafiles/TECfNlBjjBlUhNg/data.json"  background="transparent" speed="1" loop autoplay mode="normal" id="scroll-down"></lottie-player> : null }

    </Container>
  );
};

export default AboutMe;
