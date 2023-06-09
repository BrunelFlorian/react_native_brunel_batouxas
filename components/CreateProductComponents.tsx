import React from 'react';
import { View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { saveProduct } from '../assets/redux/actions/actionSaveProduct';

export default function CreateProductComponents() {
  const dispatch = useDispatch();

  const handleSaveProduct = () => {
    dispatch(saveProduct());
  };

  return (
    <View>
      <Button title="Save product" onPress={handleSaveProduct} />
    </View>
  );
};