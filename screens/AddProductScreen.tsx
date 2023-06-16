import {View, StyleSheet, Text, ScrollView, FlatList} from "react-native";
import React, { useState } from 'react';
import { Product } from "../models/Product";
import ListProductItemComponents from "../components/ListProductItemComponents";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import ProductListComponents from "../components/ProductListComponents";

export default function AddProductScreen({ route }) {
  const { listProduct } = route.params;
  const products = useSelector(state => state.appReducer.products);
  
    return (
      <View style={styles.container}>
        <ScrollView>
          <FlatList data={products} renderItem={({item}) =><ProductListComponents product={item} listProduct={listProduct} />}
                  keyExtractor={(item: Product) => item.name}/>
        </ScrollView>
      </View>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      
    },
  });