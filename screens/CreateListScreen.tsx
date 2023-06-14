import { View, StyleSheet } from "react-native";
import * as React from 'react'
import CreateListComponents from "../components/CreateListComponents";

export default function CreateListScreen() {
    return (
      <View style={styles.container}>
        <CreateListComponents />
      </View>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  });