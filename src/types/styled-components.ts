import 'styled-components';
import type {ThemeScheme} from '../theme';

declare module 'styled-components' {
  interface DefaultTheme extends ThemeScheme {}
}
