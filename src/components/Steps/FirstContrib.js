import { useEffect } from 'react';
import { useCountUp } from 'react-countup';
import styled, { keyframes } from 'styled-components';
import { Frame, Icon } from '@react95/core';

import Container from './common';
import { useState } from 'react';

function easeInOutQuint(t, b, c, d) {
  if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t * t + b;
  return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
}

const FIRST_CONTRIB = '20';

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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const ContribImage = styled.img`
  animation: ${fadeIn} 1s linear;
`;

const FirstContrib = () => {
  const [showContrib, toggleContrib] = useState(false);
  const { countUp, pauseResume } = useCountUp({
    start: 0,
    end: 1548,
    delay: 0,
    duration: 30,
    easingFn: easeInOutQuint,
  });

  useEffect(() => {
    if (countUp === FIRST_CONTRIB) {
      pauseResume();
      toggleContrib(true);
    }
  }, [countUp, pauseResume, toggleContrib]);

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
      {showContrib && (
        <ContribImage
          alt="Foto do pull request da primeira contribuição"
          src="/imgs/firstcontrib.png"
          onClick={pauseResume}
        />
      )}
    </Container>
  );
};

export default FirstContrib;
