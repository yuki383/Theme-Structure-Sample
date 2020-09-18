/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, {useCallback, useState} from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {Main} from './src/Main';
import {theme as AppTheme, Schemes} from './src/theme';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const [theme, setTheme] = useState<Schemes>('light');

  const barStyle = theme === 'light' ? 'dark-content' : 'light-content';

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      if (prev === 'light') {
        return 'dark';
      }
      return 'light';
    });
  }, [setTheme]);
  return (
    <ThemeProvider theme={AppTheme[theme]}>
      <StatusBar barStyle={barStyle} />
      <Main toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

export default App;
