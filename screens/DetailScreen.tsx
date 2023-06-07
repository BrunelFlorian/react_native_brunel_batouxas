import { View, StyleSheet, FlatList } from "react-native";
import TitleComponents from "../components/TitleComponents";
import InputComponents from "../components/InputComponents";
import CreateProductComponents from "../components/CreateProductComponents";

export const INPUT_LIST : string[] = [
  "Product name",
  "Product description",
]

export default function DetailScreen() {
    return (
      <View style={styles.container}>
        <TitleComponents title="Product detail" />
        <FlatList data={INPUT_LIST} renderItem={({item}) => <InputComponents placeholder={item} />}
                keyExtractor={(item: string) => item}/>
        <CreateProductComponents />
      </View>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  });