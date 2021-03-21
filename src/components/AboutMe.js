import styled from 'styled-components';
import { List, Modal, Frame, Fieldset, Icon } from '@react95/core';

const SocialMediaListItem = styled.li`
  display: flex;
  margin-bottom: 6px;

  i {
    display: inline-block;
    margin-right: 6px;
    width: 16px;
    height: 16px;
  }
`;

const AboutMe = ({ onClose }) => (
  <Modal
    width="550"
    icon="ulclient_1002_16x16_4bit"
    title="Gabriel Gonçalves Daltoso"
    closeModal={onClose}
    defaultPosition={{
      x: 150,
      y: 250,
    }}
    buttons={[{ value: 'Ok', onClick: onClose }]}
  >
    <Frame
      boxShadow="none"
      bg="transparent"
      display="flex"
      flexDirection="column"
      p={3}
    >
      <Frame boxShadow="none" bg="transparent" display="flex">
        <Frame
          width="275px"
          height="275px"
          boxShadow="in"
          flexShrink="0"
          pt={1}
          pl={1}
        >
          <img alt="foto de Gabriel Daltoso" src="/imgs/eu.jpg" width="100%" />
        </Frame>

        <Frame ml="20" boxShadow="none" bg="transparent" width="100%">
          <h2 style={{ marginTop: 0 }}>Gabriel Daltoso</h2>
          <p>
            Falo que sou front-end mas tento centralizar uma div desde 2014.
          </p>
          <p>
            Atualmente faço isso no
            <a href="https://github.com/Gympass/yoga">Yoga</a> e quem me paga é
            a Gympass.
          </p>
          <br />

          <Fieldset legend="Links úteis" style={{ marginTop: 10 }}>
            <ul>
              <SocialMediaListItem>
                <Icon name="bat_exec_2_32x32_4bit" />
                <a href="https://github.com/ggdaltoso">github.com/ggdaltoso</a>
              </SocialMediaListItem>
              <SocialMediaListItem>
                <Icon name="info_bubble_32x32_4bit" />
                <a href="https://twitter.com/ggdaltoso">
                  twitter.com/ggdaltoso
                </a>
              </SocialMediaListItem>
              <SocialMediaListItem>
                <Icon name="syncui_120_16x16_4bit" />
                <a href="https://linkedin.com/in/ggdaltoso">
                  linkedin.com/in/ggdaltoso
                </a>
              </SocialMediaListItem>
              <SocialMediaListItem>
                <Icon name="file_pencil_32x32_4bit" />
                <a href="https://ggdaltoso.dev">ggdaltoso.dev</a>
              </SocialMediaListItem>
              <SocialMediaListItem>
                <Icon name="ulclient_1002_16x16_4bit" />
                <a href="https://react-goiania.ggdaltoso.dev">
                  react-goiania.ggdaltoso.dev
                </a>
              </SocialMediaListItem>
            </ul>
          </Fieldset>
        </Frame>
      </Frame>
      <List.Divider
        as="span"
        style={{ marginLeft: 0, marginTop: 30, width: '100%' }}
      />
    </Frame>
  </Modal>
);

export default AboutMe;
