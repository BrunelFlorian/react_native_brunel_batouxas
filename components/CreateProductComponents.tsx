import React, { useState } from 'react';
import { View, /*Button,*/ StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { saveProduct } from '../assets/redux/actions/actionSaveProduct';
import InputComponents from './InputComponents';
import { LISTCATEGORY_DATA } from '../data/stub';

export default function CreateProductComponents() {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productCategory, setProductCategory] = useState('');

  const handleSaveProduct = () => {
    dispatch(saveProduct(productName, productDescription, productCategory));
  };

  return (
    <View style={styles.centered}>
      <InputComponents
        inputNameLabel="Name"
        inputDescriptionLabel="Description"
        selectCategoryLabel="Category"
        listCategory={LISTCATEGORY_DATA}
        onNameValueChange={setProductName}
        onDescriptionValueChange={setProductDescription}
        onSelectCategoryValueChange={setProductCategory}
      />
      <Button style={styles.button} mode="contained" onPress={handleSaveProduct}>
        Save product
      </Button>
    </View>
  )
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    marginTop: 50,
    width: 200,
    borderWidth: 2,
  },
});