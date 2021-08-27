import styled from 'styled-components';

export const SButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.interactive.default};
  border-radius: 3px;
  padding: ${({ theme }) => theme.spacing.sm}rem
    ${({ theme }) => theme.spacing.md}rem;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  background-color: ${({ theme }) => theme.colors.interactive.default};
  color: ${({ theme }) => theme.colors.interactive.txt};

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.interactive.hover};
    z-index: 1;
  }
`;
