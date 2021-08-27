import React from 'react';
import { ThemeProvider } from 'styled-components';
import mainTheme from 'theme/theme';
import { SPageContainer, SPageContent, SPageMain } from './App.styles';
import Dashboard from './pages/Dashboard';

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <SPageContainer>
        <SPageMain>
          <SPageContent>
            <Dashboard />
          </SPageContent>
        </SPageMain>
      </SPageContainer>
    </ThemeProvider>
  );
};

export default App;
