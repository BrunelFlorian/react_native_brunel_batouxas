import {View, StyleSheet, Text, ScrollView, FlatList} from "react-native";
import React, { useState } from 'react';
import { Product } from "../models/Product";
import ListProductItemComponents from "../components/ListProductItemComponents";

export default function DetailListProductScreen({ route }) {
  const { listProduct } = route.params;
  const idList = listProduct.id;
  const [products] = useState(listProduct.products);
  
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