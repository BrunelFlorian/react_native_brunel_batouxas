// tests/actions.test.js

import { addProductToList } from '../assets/redux/actions/actionAddProductToList';
import { deleteProductInProductList } from '../assets/redux/actions/actionDeleteProductInProductList';

describe('Product Actions', () => {
  it('should create an action to add a product to the list', () => {
    const product = { id: 1, name: 'Product 1' };
    const listId = 1;
    const expectedAction = {
      type: 'ADD_PRODUCT_TO_LIST',
      payload: { product, listProductId: listId },
    };
    expect(addProductToList(product, listId)).toEqual(expectedAction);
  });

  it('should create an action to remove a product from the list', () => {
    const productId = 1;
    const listId = 1;
    const expectedAction = {
      type: 'DELETE_PRODUCT_IN_PRODUCT_LIST',
      payload: [listId, productId],
    };
    expect(deleteProductInProductList(productId, listId)).toEqual(expectedAction);
  });
});
