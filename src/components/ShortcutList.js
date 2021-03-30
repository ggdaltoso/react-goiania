import styled from 'styled-components';
import { Icon } from '@react95/core';

const ShortcutList = styled.ul`
  display: inline-block;
  padding: 0;
  margin: 0;
  list-style: none;
  width: 50px;
  float: left;
`;

const Item = styled.li`
  color: white;
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  p {
    margin: 4px 0;
    border: 1px dotted transparent;
  }

  :focus {
    outline: none;

    div {
      background-color: rgba(0, 0, 123, 0.3);
      background-blend-mode: multiply;
    }

    p {
      background-color: #00007b;
      border-color: currentColor;
    }
  }
`;
const ShortcutImg = styled.div`
  position: relative;
  width: 50px;
`;

const Shortcut = ({ children, who, icon, ...rest }) => (
  <Item {...rest}>
    <ShortcutImg>
      {who && (
        <div
          style={{
            width: 50,
            height: 50,
            backgroundImage: `url(/imgs/${who})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
      )}
      {icon && (
        <Icon
          name={icon}
          style={{
            width: 50,
            height: 50,
          }}
        />
      )}
      <Icon
        style={{ position: 'absolute', bottom: 0, left: 0 }}
        name="shortcut_32x32_4bit"
      />
    </ShortcutImg>
    <p
      style={{
        textAlign: 'center',
      }}
    >
      {children}
    </p>
  </Item>
);

ShortcutList.Shortcut = Shortcut;

export default ShortcutList;
