import 'styled-components';
import type { MainTheme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends MainTheme {}
}
