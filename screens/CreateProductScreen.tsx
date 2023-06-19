import { View, StyleSheet} from "react-native";
import * as React from 'react'
import TitleComponents from "../components/TitleComponents";
import CreateProductComponents from "../components/CreateProductComponents";

export default function CreateProductScreen() {
    return (
      <View style={styles.container}>
        <TitleComponents title="Add a new product" />
        <CreateProductComponents />
      </View>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  });