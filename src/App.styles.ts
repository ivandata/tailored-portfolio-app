import styled from 'styled-components';

export const SPageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bkg.page};
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SPageMain = styled.main`
  height: 100%;
  padding: ${({ theme }) => theme.spacing.xl}rem
    ${({ theme }) => theme.spacing.xl}rem;
  color: ${({ theme }) => theme.colors.txt.body};
  font-family: 'IBM Plex Sans', 'Arial', 'sans-serif';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  & * {
    transition-property: background-color, border-color, color, fill, stroke,
      opacity, box-shadow, transform, filter, backdrop-filter, -webkit-filter,
      -webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;
  }
`;

export const SPageContent = styled.section`
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
