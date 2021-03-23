import { Frame, List } from '@react95/core';

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

export default Container;
