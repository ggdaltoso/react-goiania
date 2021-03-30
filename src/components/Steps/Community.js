import { Frame, Tabs, Tab, Icon } from '@react95/core';

import { Container } from './common';

const CommunityGuy = ({ src, title, twitter }) => (
  <Frame boxShadow="none" display="flex">
    <Frame boxShadow="in" flexShrink="0" pt={1} pl={1} width={302}>
      <img
        width={300}
        height={225}
        alt={`Foto com ${title}`}
        src={`/imgs/${src}.jpg`}
      />
    </Frame>

    <Frame boxShadow="none" ml={20}>
      <h3>{title}</h3>
      <p
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Icon
          name="info_bubble_32x32_4bit"
          style={{
            display: 'inline-block',
            marginRight: 6,
            width: 16,
            height: 16,
          }}
        />
        <a
          href={`https://twitter.com/${twitter}`}
          target="_blank"
          rel="noreferrer"
        >
          @{twitter}
        </a>
      </p>
    </Frame>
  </Frame>
);

const Community = () => (
  <Container>
    <Tabs>
      <Tab title="Kent C. Dodds">
        <CommunityGuy src="kent" title="Kent C. Dodds" twitter="kentcdodds" />
      </Tab>
      <Tab title="Mark Dalgleish">
        <CommunityGuy
          src="mark"
          title="Mark Dalgleish"
          twitter="markdalgleish"
        />
      </Tab>
    </Tabs>
  </Container>
);

export default Community;
