import {View, StyleSheet, Text} from "react-native";

export default function DetailCategoryScreen({ route }) {
  const { title } = route.params;
    return (
      <View style={styles.container}>
        <Text>{title}</Text>
      </View>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      
    },
  });