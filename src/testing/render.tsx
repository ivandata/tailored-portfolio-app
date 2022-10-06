import React, { ReactElement, ReactNode } from 'react';
import {
  render as _render,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import mainTheme from 'theme/theme';

const ContextWrapper = (props: { children?: ReactNode }) => {
  const { children } = props;
  return <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>;
};

export const render = (
  ui: ReactElement,
  options?: RenderOptions,
): RenderResult => _render(ui, { wrapper: ContextWrapper, ...options });
