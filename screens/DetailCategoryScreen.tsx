import {View, StyleSheet, FlatList} from "react-native";
import TitleComponents from "../components/TitleComponents";

export const TITLE_LIST : string[] = [
  "Title 1",
  "Title 2",
  "Title 8",
]

export default function DetailCategoryScreen() {
    return (
      <View style={styles.container}>
        <FlatList data={TITLE_LIST} renderItem={({item}) => <TitleComponents title={item} />}
                keyExtractor={(item: string) => item}/>
      </View>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });