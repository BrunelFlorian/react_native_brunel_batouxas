import { StyleSheet } from 'react-native';
import BottomNavigation from './navigation/BottomNavigation';
import { Provider } from 'react-redux';
import store from './assets/redux/store';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { colors } from './theme/theme.json';

const theme = {
  ...DefaultTheme,
  colors: colors, // Copy it from the color codes scheme and then use it here
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
