import React from 'react';
import { ThemeProvider } from 'styled-components';
import mainTheme from 'theme/theme';
import { SPageContainer } from './App.styles';
import Dashboard from './pages/Dashboard';

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <SPageContainer>
        <Dashboard />
      </SPageContainer>
    </ThemeProvider>
  );
};

export default App;
