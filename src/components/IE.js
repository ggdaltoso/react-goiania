import { useEffect } from 'react';
import { Modal, Frame } from '@react95/core';
import { useClippy } from '@react95/clippy';

import { DivImage } from './Steps/common';

const IE = ({ onClose }) => {
  const { clippy } = useClippy();

  useEffect(() => {
    clippy.play('CheckingSomething');
  }, [clippy]);

  return (
    <Modal
      width="775"
      icon="mshtml_32547_32x32_4bit"
      title="React95 - A React components library with Win95 UI"
      closeModal={onClose}
      style={{
        position: 'absolute',
        left: '15%',
        top: '15%',
      }}
    >
      <Frame boxShadow="in" bg="white" height={463} pl={1} pt={1} mt={84}>
        <DivImage
          src="/imgs/ie_header2.png"
          style={{
            position: 'absolute',
            top: 20,
            left: 2,
            width: '99.7%',
            height: '92px',
          }}
        />
        <DivImage
          title="React95 - A React components library with Win95 UI"
          src="/imgs/GH.png"
        />
      </Frame>
    </Modal>
  );
};

export default IE;
