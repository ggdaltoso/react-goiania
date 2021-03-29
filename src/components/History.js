import { useEffect } from 'react';
import { Wizard, Steps, Step, WithWizard } from 'react-albus';
import { Button, Modal } from '@react95/core';
import { useClippy } from '@react95/clippy';
import styled from 'styled-components';

import {
  Birth,
  FirstContrib,
  Future,
  Nomination,
  Nowadays,
  Reward,
} from './Steps';

const WizardControles = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Navigation = () => (
  <WithWizard
    render={({ next, previous, step, steps }) => (
      <WizardControles>
        {steps.indexOf(step) > 0 && <Button onClick={previous}>Back</Button>}

        {steps.indexOf(step) < steps.length - 1 && (
          <Button onClick={next}>Next</Button>
        )}
      </WizardControles>
    )}
  />
);

const History = ({ onClose }) => {
  const { clippy } = useClippy();

  useEffect(() => {
    if (clippy) clippy.play('Writing');
  }, [clippy]);

  return (
    <Modal
      width="1000"
      height="600"
      icon="access_219_32x32_4bit"
      title="React95 - a história"
      closeModal={onClose}
      style={{
        position: 'absolute',
        left: '10%',
        top: '20%',
      }}
    >
      <Wizard>
        <Steps>
          <Step id="birth">
            <Birth />
          </Step>
          <Step id="firstContrib">
            <FirstContrib />
          </Step>
          <Step id="nomination">
            <Nomination />
          </Step>
          <Step id="reward">
            <Reward />
          </Step>
          <Step id="nowadays">
            <Nowadays />
          </Step>
          <Step id="future">
            <Future />
          </Step>
        </Steps>
        <Navigation />
      </Wizard>
    </Modal>
  );
};

export default History;
