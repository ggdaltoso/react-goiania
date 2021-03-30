import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { GlobalStyle, ThemeProvider, TaskBar, List } from '@react95/core';
import { ClippyProvider } from '@react95/clippy';

import '@react95/icons/icons.css';

import { ShortcutList, AboutMe, History, IE } from './components';

const AppStyle = createGlobalStyle`
  image-rendering: pixelated;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

const Link = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  flex-grow: 1;
  height: 30;
  padding-top: 9;
  text-decoration: none;
  color: inherit;
`;

const Desktop = styled.main`
  padding-top: 10px;
`;

function App() {
  const [showAboutMe, toggleShowAboutMe] = useState(false);
  const [showHistory, toggleShowHistory] = useState(false);
  const [showFuture, toggleShowFuture] = useState(false);

  return (
    <ThemeProvider>
      <GlobalStyle />
      <AppStyle />
      <ClippyProvider>
        <Desktop>
          <ShortcutList>
            <ShortcutList.Shortcut
              tabIndex={0}
              who="eu.png"
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
            <ShortcutList.Shortcut
              tabIndex={1}
              icon="mshtml_32528_48x48_4bit"
              onDoubleClick={() => toggleShowFuture(true)}
            >
              Internet Explorer
            </ShortcutList.Shortcut>
          </ShortcutList>
          {showAboutMe && <AboutMe onClose={() => toggleShowAboutMe(false)} />}
          {showHistory && <History onClose={() => toggleShowHistory(false)} />}
          {showFuture && <IE onClose={() => toggleShowFuture(false)} />}
        </Desktop>

        <TaskBar
          list={
            <List>
              <List.Item icon="computer_3_32x32_4bit">
                <Link href="https://github.com/React95/React95">React95</Link>
              </List.Item>
            </List>
          }
        />
      </ClippyProvider>
    </ThemeProvider>
  );
}

export default App;
