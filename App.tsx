import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import BottomNavigation from './navigation/BottomNavigation';
import { PaperProvider } from 'react-native-paper';
import { DefaultTheme } from '@react-navigation/native';


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
    <PaperProvider theme={theme}>
      <BottomNavigation />
    </PaperProvider>
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
