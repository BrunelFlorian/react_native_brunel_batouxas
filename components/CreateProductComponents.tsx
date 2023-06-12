import React, { useState } from 'react';
import { View, Button } from 'react-native';
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
    <View>
      <InputComponents
        inputNamePlaceholder="Name"
        inputDescriptionPlaceholder="Description"
        inputCategoryPlaceholder="Category"
        listCategory={LISTCATEGORY_DATA}
        onNameValueChange={setProductName}
        onDescriptionValueChange={setProductDescription}
        onSelectCategoryValueChange={setProductCategory}
      />
      <Button title="Save product" onPress={handleSaveProduct} />
    </View>
  );
};