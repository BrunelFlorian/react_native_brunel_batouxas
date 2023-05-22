import {View, StyleSheet} from "react-native";
import TitleComponents from "../components/TitleComponents";

export default function HomeScreen() {
    return (
      <View style={styles.container}>
        <TitleComponents title="test" />
      </View>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "darksalmon",
    },
    title: {
      fontSize: 20
    }
  });