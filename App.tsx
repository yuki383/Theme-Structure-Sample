/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {Main} from './src/Main';
import {theme as AppTheme} from './src/theme';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <ThemeProvider theme={AppTheme['light']}>
      <StatusBar barStyle="dark-content" />
      <Main />
    </ThemeProvider>
  );
};

export default App;
