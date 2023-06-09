import {View, StyleSheet, Text, ScrollView, FlatList} from "react-native";
import { Product } from "../models/Product";
import ListProductItemComponents from "../components/ListProductItemComponents";

export default function DetailListProductScreen({ route }) {
  const { products } = route.params;
  
    return (
      <View style={styles.container}>
        <ScrollView>
          <FlatList data={products} renderItem={({item}) =><ListProductItemComponents title={item.name} product={item} />}
                  keyExtractor={(item: Product) => item.name}/>
        </ScrollView>
      </View>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      
    },
  });