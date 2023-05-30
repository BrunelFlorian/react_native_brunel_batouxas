import {View, StyleSheet, FlatList, Button} from "react-native";
import TitleComponents from "../components/TitleComponents";
import { useNavigation } from '@react-navigation/native';

export const TITLE_LIST : string[] = [
  "Title 1",
  "Title 2",
  "Title 3",
]

export default function HomeScreen() {
  const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <FlatList data={TITLE_LIST} renderItem={({item}) => <TitleComponents title={item} />}
                keyExtractor={(item: string) => item}/>
                <Button title="Go to Detail Category Screen" onPress={() => navigation.navigate("DetailCategory")} />
      </View>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });