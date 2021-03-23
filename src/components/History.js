import { useEffect } from 'react';
import { Wizard, Steps, Step, WithWizard } from 'react-albus';
import { Button, Modal } from '@react95/core';
import { useClippy } from '@react95/clippy';
import styled from 'styled-components';

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
    console.log(clippy);
    clippy.play('Writing');
  }, [clippy]);

  return (
    <Modal
      width="550"
      icon="access_219_32x32_4bit"
      title="React95 - a história"
      closeModal={onClose}
      style={{
        position: 'absolute',
        left: '20%',
        top: '20%',
      }}
    >
      <Wizard>
        <Steps>
          <Step id="gandalf">
            <p>React95</p>
          </Step>
          <Step id="dumbledore">
            <p>Ganhou</p>
          </Step>
          <Step id="ice king">
            <p>Premios</p>
          </Step>
        </Steps>
        <Navigation />
      </Wizard>
    </Modal>
  );
};

export default History;
