type ColorScheme = {
  primary: string;
  secondary: string;
  background: string;
  surface: string;

  onPrimary: string;
  onPrimaryAlt: string;
  onSecondary: string;
  onSecondaryAlt: string;
  onBackground: string;
  onBackgroundAlt: string;
  onSurface: string;
  onSurfaceAlt: string;
};

export type ThemeScheme = {
  color: ColorScheme;
  scheme: Schemes;
};

export type Schemes = 'light' | 'dark';

const castToTheme = <T extends Record<Schemes, ThemeScheme>>(theme: T) => theme;

export const theme = castToTheme({
  light: {
    color: {
      primary: '#fff',
      secondary: 'rgb(33, 138, 245)',
      background: '#fff',
      surface: '#fff',

      onPrimary: 'rgb(50,50,50)',
      onPrimaryAlt: 'rgb(108,122,140)',
      onSecondary: '#fff',
      onSecondaryAlt: 'rgb(108,122,140)',
      onBackground: 'rgb(50,50,50)',
      onBackgroundAlt: 'rgb(108,122,140)',
      onSurface: 'rgb(50,50,50)',
      onSurfaceAlt: 'rgb(108,122,140)',
    },
    scheme: 'light',
  },
  dark: {
    color: {
      primary: 'rgb(27, 29, 33)',
      secondary: 'rgb(33, 138, 245)',
      background: 'rgb(25, 23, 29)',
      surface: 'rgb(27, 29, 33)',

      onPrimary: '#fff',
      onPrimaryAlt: 'rgb(108,122,140)',
      onSecondary: '#fff',
      onSecondaryAlt: 'rgb(108,122,140)',
      onBackground: '#fff',
      onBackgroundAlt: 'rgb(108,122,140)',
      onSurface: '#fff',
      onSurfaceAlt: 'rgb(108,122,140)',
    },
    scheme: 'dark',
  },
});
