import { GlobalStyle, ThemeProvider, TaskBar, List } from '@react95/core';
import styled, { createGlobalStyle } from 'styled-components';
import '@react95/icons/icons.css';

import { ShortcutList } from './components';

const AppStyle = createGlobalStyle`
  image-rendering: pixelated;
`;
const Desktop = styled.main`
  padding-top: 10px;
`;

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <AppStyle />

      <Desktop>
        <ShortcutList>
          <ShortcutList.Shortcut tabIndex={0} who="eu.jpg">
            ggdaltoso
          </ShortcutList.Shortcut>
          <ShortcutList.Shortcut tabIndex={1} who="React95-logo.png">
            React95
          </ShortcutList.Shortcut>
        </ShortcutList>
      </Desktop>

      <TaskBar
        list={
          <List>
            <List.Item icon="reader_closed_32x32_4bit">
              Local Disk (C:)
            </List.Item>
            <List.Item icon="windows_explorer_32x32_4bit">
              Windows Explorer
            </List.Item>
          </List>
        }
      />
    </ThemeProvider>
  );
}

export default App;
