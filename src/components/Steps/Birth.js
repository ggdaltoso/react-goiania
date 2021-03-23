import styled from 'styled-components';
import { Frame, Checkbox } from '@react95/core';

import Container from './common';

const CheckboxList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Birth = () => (
  <Container>
    <Frame boxShadow="none" bg="transparent" height="100%" display="flex">
      <Frame boxShadow="in" flexShrink="0" pt={1} pl={1}>
        <a
          href="http://catho.github.io/quantum"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="Logo da Catho" src="/imgs/catho.png" />
        </a>
      </Frame>

      <Frame
        ml="20"
        boxShadow="none"
        bg="transparent"
        display="inline-block"
        width="100%"
      >
        <h2>Onde tudo começou</h2>

        <br />

        <p>Precisávamos do seguinte:</p>

        <CheckboxList>
          <Checkbox checked={false}>Definição de um padrão visual</Checkbox>
          <Checkbox checked={false}>
            Lugar onde encontrar definições visuais
          </Checkbox>
          <Checkbox checked={false}>
            Sabemos fazer algo que resolva isso?
          </Checkbox>
          <Checkbox checked={false}>Design system</Checkbox>
          <Checkbox checked={false}>Biblioteca de componentes</Checkbox>
          <Checkbox checked={false}>
            <i>build</i> e <i>deploy</i> automatizados
          </Checkbox>
          <Checkbox checked={false}>
            <em>NPM</em>
          </Checkbox>
          <Checkbox checked={false}>
            <i>TreeShaking</i>
          </Checkbox>
        </CheckboxList>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <p>Ninguém sabia nem por onde começar!</p>
      </Frame>
    </Frame>
  </Container>
);

export default Birth;
