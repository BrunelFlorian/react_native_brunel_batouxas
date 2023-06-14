import {View, StyleSheet, FlatList, Button} from "react-native";
import { useNavigation, useTheme } from '@react-navigation/native';
import { ScrollView } from "react-native-gesture-handler";
import { LISTPRODUCT_DATA } from "../data/stub";
import { Category } from "../models/Category";
import ListListCourseItemComponents from "../components/ListListCourseItemComponents";
import {useSelector} from 'react-redux';

export default function HomeScreen() {
  const navigation = useNavigation();
  const listProduct = useSelector(state => state.appReducer.listProduct);
 
    return (
      <View style={styles.container}>
      <ScrollView>
        <FlatList data={listProduct} renderItem={({item}) =><ListListCourseItemComponents title={item.name} listProduct={item} />}
                keyExtractor={(item: Category) => item.name}/>
      </ScrollView>
        <Button title="Add List" onPress={() => navigation.navigate("CreateList")} />
      </View>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });