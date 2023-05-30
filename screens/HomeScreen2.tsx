import {View, StyleSheet} from "react-native";
import TitleComponents from "../components/TitleComponents";

export default function HomeScreen2() {
    return (
      <View style={styles.container}>
        <TitleComponents title="test" />
      </View>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });