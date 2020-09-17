import 'styled-components';
import type {theme} from '../theme';

type AppTheme = typeof theme[keyof typeof theme];

declare module 'styled-components' {
  interface DefaultTheme extends AppTheme {}
}
