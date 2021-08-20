import React from 'react';
import { ThemeProvider } from 'styled-components';
import mainTheme from 'theme/theme';
import { SPageHeader, SPageContainer, SLink } from './App.styles';

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <SPageContainer>
        <SPageHeader>
          <SLink
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </SLink>
        </SPageHeader>
      </SPageContainer>
    </ThemeProvider>
  );
};

export default App;
