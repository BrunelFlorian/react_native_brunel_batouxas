import {View, StyleSheet, FlatList, Button} from "react-native";
import { useNavigation, useTheme } from '@react-navigation/native';
import { ScrollView } from "react-native-gesture-handler";
import { LISTPRODUCT_DATA } from "../data/stub";
import { Category } from "../models/Category";
import ListListCourseItemComponents from "../components/ListListCourseItemComponents";

export default function HomeScreen() {
  const navigation = useNavigation();
 
    return (
      <View style={styles.container}>
      <ScrollView>
        <FlatList data={LISTPRODUCT_DATA} renderItem={({item}) =><ListListCourseItemComponents title={item.name} listProduct={item} />}
                keyExtractor={(item: Category) => item.name}/>
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