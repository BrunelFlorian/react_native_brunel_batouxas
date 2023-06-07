import React from 'react';
import { View, Button } from 'react-native';

const handleClic = () => {
  console.log("Create product");
};
  
export default function CreateProductComponents() {
  return (
    <View>
      <Button title="Create product" onPress={handleClic} />
    </View>
  )
};