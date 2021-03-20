import { GlobalStyle, ThemeProvider, TaskBar, List } from '@react95/core';
import '@react95/icons/icons.css';

function Desktop() {
  return (
    <ThemeProvider>
      <GlobalStyle />
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

export default Desktop;
