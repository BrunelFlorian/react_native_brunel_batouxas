import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { saveProduct } from '../assets/redux/actions/actionSaveProduct';
import { TextInput } from 'react-native-paper';
import TitleComponents from './TitleComponents';
import { Button } from 'react-native-paper';
import { createListProduct, saveListProduct } from '../assets/redux/actions/actionCreateListProduct';
import { useNavigation } from '@react-navigation/native';

export default function CreateListComponents() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSaveList = () => {
    dispatch(createListProduct(name));
    navigation.navigate("Home");
  };

  const [name, setName] = React.useState("");

  return (
    <View>
      <TitleComponents title="Add a List" />
      <TextInput style={styles.input}
        label="name of the list"
        value={name}
        onChangeText={text => setName(text)}
      />
      <Button style={styles.input} icon="plus" mode="contained" onPress={() => handleSaveList()}>
        Add
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 50,
    marginVertical: 10,
  }
});
