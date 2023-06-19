import { View, StyleSheet, FlatList, ScrollView, Button } from "react-native";
import * as React from 'react'
import ProductListComponents from "../components/ProductListComponents";
import { Product } from "../models/Product";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function ProductScreen() {
  const navigation = useNavigation();
  const products = useSelector(state => state.appReducer.products);
    return (
      <View style={styles.container}>
        <ScrollView>
          <FlatList data={products} renderItem={({item}) =><ProductListComponents title={item.name} product={item} />}
                  keyExtractor={(item: Product) => item.name}/>
          </ScrollView>
          <Button title="Add new product" onPress={() => navigation.navigate("CreateProduct")} />
      </View>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  });