import styled from 'styled-components';

export const SLabel = styled.label`
  max-width: 400px;
  display: block;

  p {
    margin: 0;
  }
`;

export const SDescription = styled.small`
  color: ${({ theme }) => theme.colors.txt.description};
`;

export const SInput = styled.input`
  flex: 1;
  border-width: 1px;
  border-style: solid;
  display: block;
  width: 100%;
  border-radius: 3px;
  padding: ${({ theme }) => theme.spacing.sm}rem
    ${({ theme }) => theme.spacing.md}rem;
`;
