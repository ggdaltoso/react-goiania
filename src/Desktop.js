import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { GlobalStyle, ThemeProvider, TaskBar, List } from '@react95/core';
import { ClippyProvider } from '@react95/clippy';

import '@react95/icons/icons.css';

import { ShortcutList, AboutMe, History } from './components';

const AppStyle = createGlobalStyle`
  image-rendering: pixelated;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

const Desktop = styled.main`
  padding-top: 10px;
`;

function App() {
  const [showAboutMe, toggleShowAboutMe] = useState(false);
  const [showHistory, toggleShowHistory] = useState(false);

  return (
    <ThemeProvider>
      <ClippyProvider>
        <GlobalStyle />
        <AppStyle />

        <Desktop>
          <ShortcutList>
            <ShortcutList.Shortcut
              tabIndex={0}
              who="eu.jpg"
              onDoubleClick={() => toggleShowAboutMe(true)}
            >
              ggdaltoso
            </ShortcutList.Shortcut>
            <ShortcutList.Shortcut
              tabIndex={1}
              who="React95-logo.png"
              onDoubleClick={() => toggleShowHistory(true)}
            >
              React95
            </ShortcutList.Shortcut>
          </ShortcutList>
          {showAboutMe && <AboutMe onClose={() => toggleShowAboutMe(false)} />}
          {showHistory && <History onClose={() => toggleShowHistory(false)} />}
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
      </ClippyProvider>
    </ThemeProvider>
  );
}

export default App;
