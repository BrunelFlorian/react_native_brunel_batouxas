import { StyleSheet } from 'react-native';
import BottomNavigation from './navigation/BottomNavigation';
import { PaperProvider } from 'react-native-paper';
import { DefaultTheme } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import store from './assets/redux/store';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <BottomNavigation />
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
