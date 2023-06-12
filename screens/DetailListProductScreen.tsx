import {View, StyleSheet, Text, ScrollView, FlatList} from "react-native";
import { Product } from "../models/Product";
import ListProductItemComponents from "../components/ListProductItemComponents";

export default function DetailListProductScreen({ route }) {
  const { products, idList } = route.params;
  console.log(idList);
  
  
    return (
      <View style={styles.container}>
        <ScrollView>
          <FlatList data={products} renderItem={({item}) =><ListProductItemComponents title={item.name} product={item} idList={idList} />}
                  keyExtractor={(item: Product) => item.name}/>
        </ScrollView>
      </View>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      
    },
  });