import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Frame, List } from '@react95/core';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const Fadder = styled.div`
  animation: ${({ show }) => (show ? fadeIn : fadeOut)} 0.6s;
`;

const Container = ({ children, ...props }) => (
  <Frame
    boxShadow="none"
    bg="transparent"
    display="flex"
    flexDirection="column"
    height="100%"
    pb={8}
    {...props}
  >
    <div style={{ flexGrow: 1 }}>{children}</div>

    <List.Divider
      as="span"
      style={{ marginLeft: 0, marginTop: 30, width: '100%' }}
    />
  </Frame>
);

const Fade = ({ show, children }) => {
  const [render, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    render && (
      <Fadder show={show} onAnimationEnd={onAnimationEnd}>
        {children}
      </Fadder>
    )
  );
};

const DivImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('${({ src }) => src}');
`;

export { Container, Fade, DivImage };
