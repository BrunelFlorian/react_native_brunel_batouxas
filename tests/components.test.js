import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useDispatch } from 'react-redux';
import * as ReactRedux from 'react-redux'; // Ajout de l'import ReactRedux
import ProductListComponents from '../components/ProductListComponents';
import { addProductToList } from '../assets/redux/actions/actionAddProductToList';
import * as mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

describe('ProductListComponents', () => {
  const product = {
    id: '1',
    name: 'Product 1',
    // ... autres propriétés
  };

  const listProduct = {
    id: '1',
    name: 'List Product 1',
    // ... autres propriétés
  };

  it('should render product name', () => {
    const { getByText } = render(<ProductListComponents product={product} listProduct={listProduct} />);
    const productName = getByText('Product 1');
    expect(productName).toBeDefined();
  });

  it('should dispatch addProductToList action on press', () => {
    const dispatchMock = jest.fn();
    jest.spyOn(ReactRedux, 'useDispatch').mockReturnValue(dispatchMock); // Utilisation de jest.spyOn
    const { getByTestId } = render(<ProductListComponents product={product} listProduct={listProduct} />);
    const card = getByTestId('product-card');
    fireEvent.press(card);
    expect(dispatchMock).toHaveBeenCalledWith(addProductToList(product, listProduct.id));
  });
});
