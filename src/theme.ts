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

type ThemeScheme = {
  color: ColorScheme;
  scheme: Schemes;
};

type Schemes = 'light' | 'dark';

export const theme: {
  light: ThemeScheme;
} = {
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
};
