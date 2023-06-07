import {View, StyleSheet, FlatList, Button} from "react-native";
import { useNavigation, useTheme } from '@react-navigation/native';
import ItemComponents from "../components/CategorieItemComponents";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScrollView } from "react-native-gesture-handler";
export const TITLE_LIST : string[] = [
  "Title 1",
  "Title 2",
  "Title 3",
  "Title 4",
  "Title 5",
  "Title 6",
  "Title 7",
]

export default function HomeScreen() {
  const navigation = useNavigation();
 
    return (
      <View style={styles.container}>
      <ScrollView>
        <FlatList data={TITLE_LIST} renderItem={({item}) =><ItemComponents title={item} />}
                keyExtractor={(item: string) => item}/>
      </ScrollView>
        <Button title="Go to Detail Category Screen" onPress={() => navigation.navigate()} />
      </View>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });