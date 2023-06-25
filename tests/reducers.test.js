import reducer from '../assets/redux/reducers/appReducer';

describe('List Product Reducer', () => {
  const initialState = {
    listProduct: [],
    products: [],
  };

  it('should add a product to the list', () => {
    const action = {
      type: 'ADD_PRODUCT_TO_LIST',
      payload: {
        listProductId: 1,
        product: { id: 1, name: 'Product 1' },
      },
    };

    const expectedState = {
      listProduct: [
        {
          id: 1,
          listId: 1,
          name: 'Product 1',
          products: [{ id: 1, name: 'Product 1' }],
        },
      ],
      products: [],
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should remove a product from the list', () => {
    const initialState = {
      listProduct: [
        {
          id: 1,
          listId: 1,
          name: 'Product 1',
          products: [{ id: 1, name: 'Product 1' }],
        },
      ],
      products: [],
    };

    const action = {
      type: 'DELETE_PRODUCT',
      payload: [1, { id: 1, name: 'Product 1' }],
    };

    const expectedState = {
      listProduct: [
        {
          id: 1,
          listId: 1,
          name: 'Product 1',
          products: [],
        },
      ],
      products: [],
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
