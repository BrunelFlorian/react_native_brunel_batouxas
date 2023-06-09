import { StyleSheet } from 'react-native';
import BottomNavigation from './navigation/BottomNavigation';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <BottomNavigation />
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
