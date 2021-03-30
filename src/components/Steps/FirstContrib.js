import { useEffect } from 'react';
import { useCountUp } from 'react-countup';
import styled from 'styled-components';
import { Frame, Icon } from '@react95/core';

import { Container, Fade } from './common';
import { useState } from 'react';

function easeInOutQuint(t, b, c, d) {
  if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t * t + b;
  return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
}

const FIRST_CONTRIB = 20;
const NOMINATION_EMAIL = 200;

const Header = styled.header`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;

  h2 {
    width: 100%;
    margin: 0;
  }
`;

const FirstContrib = () => {
  const [showContrib, toggleContrib] = useState(false);
  const [firstStop, toggleFirstStop] = useState(false);
  const [showMail, toggleMail] = useState(false);

  const { countUp, pauseResume } = useCountUp({
    start: 0,
    end: 1548,
    delay: 0,
    duration: 30,
    easingFn: easeInOutQuint,
  });

  useEffect(() => {
    if (Number(countUp) === FIRST_CONTRIB && !firstStop) {
      pauseResume();
      toggleContrib(true);
      toggleFirstStop(true);
    }

    if (Number(countUp) >= NOMINATION_EMAIL && !showMail) {
      pauseResume();
      toggleMail(true);
      pauseResume();
    }
  }, [
    countUp,
    firstStop,
    showMail,
    pauseResume,
    toggleContrib,
    toggleMail,
    toggleFirstStop,
  ]);

  return (
    <Container>
      <Frame boxShadow="none" bg="transparent" mb={20} display="flex">
        <Header>
          <h2>React95 / React95</h2>
          <Frame
            boxShadow="in"
            display="flex"
            alignItems="center"
            width={100}
            justifyContent="space-between"
            paddingRight={6}
            style={{
              fontSize: 20,
              fontVariantNumeric: 'tabular-nums',
              textTransform: 'full-width',
            }}
          >
            <Icon name="msrating_106_32x32_4bit" />
            {countUp}
          </Frame>
        </Header>
      </Frame>
      <br />
      <br />
      <br />
      <Frame
        width="100%"
        bg="white"
        height={390}
        boxShadow="in"
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding={10}
      >
        <Fade show={showContrib}>
          <img
            alt="Foto do pull request da primeira contribuição"
            src="/imgs/firstcontrib.png"
            onClick={() => {
              pauseResume();

              toggleContrib(false);
            }}
          />
        </Fade>

        <Fade show={showMail}>
          <img
            alt="Foto do email nomeando React95 para o Open Source Awards"
            src="/imgs/mail.png"
            width={750}
          />
        </Fade>
      </Frame>
    </Container>
  );
};

export default FirstContrib;
