import {View, StyleSheet, Text, ScrollView, FlatList, Button} from "react-native";
import React, { useState } from 'react';
import { Product } from "../models/Product";
import ListProductItemComponents from "../components/ListProductItemComponents";
import { useNavigation } from "@react-navigation/native";

export default function DetailListProductScreen({ route }) {
  const { listProduct } = route.params;
  const idList = listProduct.id;
  const [products] = useState(listProduct.products);
  const navigation = useNavigation();
  
    return (
      <View style={styles.container}>
        <ScrollView>
          <FlatList data={products} renderItem={({item}) =><ListProductItemComponents title={item.name} product={item} idList={idList} />}
                  keyExtractor={(item: Product) => item.name}/>
        </ScrollView>
        <Button title="Add Product" onPress={() => navigation.navigate("AddProduct", {"listProduct": listProduct})} />
      </View>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });