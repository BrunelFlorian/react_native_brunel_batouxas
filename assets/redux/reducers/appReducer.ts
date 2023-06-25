import uuid from 'react-native-uuid';
import { LISTPRODUCT_DATA, PRODUCT_DATA } from '../../../data/stub';
import { Product } from "../../../models/Product";
import { List } from 'react-native-paper';
import { ListProduct } from '../../../models/ListProduct';

const initialState = {
  listProduct: LISTPRODUCT_DATA,
  products: PRODUCT_DATA
};
  
    // @ts-ignore
  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
          // @ts-ignore
          const newProduct = new Product(uuid.v4(), action.payload.name, action.payload.description, action.payload.category);
          const newListProduct = [...state.products, newProduct];
          
          return { ...state, products: newListProduct };
        case 'DELETE_PRODUCT':
          // @ts-ignore
           // Gérer suppression produit
          const listProducts = state.listProduct.map((listProduct) => {
            if (listProduct.id === action.payload[0]) {
              const newProducts = listProduct.products.filter(
                (product) => product.id !== action.payload[1].id
              );
              return { ...listProduct, products: newProducts };
            }
            return listProduct;
          });
          return { ...state, listProduct: listProducts };

        case 'DELETE_LIST_PRODUCT':
          // @ts-ignore
          const newListProducts = state.listProduct.filter(
            (listProduct) => listProduct.id !== action.payload[0]
          );
          return { ...state, listProduct: newListProducts };

        case 'ADD_LIST_PRODUCT':
          // @ts-ignore
          const newListProductsAdd = [...state.listProduct, new ListProduct(uuid.v4(), action.payload.name, [])];
          return { ...state, listProduct: newListProductsAdd };

        case 'ADD_PRODUCT_TO_LIST':
          // @ts-ignore
          const newListProductsAddProduct = state.listProduct.map((listProduct) => {
            if (listProduct.id === action.payload.listProductId) {
              const newProducts = [...listProduct.products, action.payload.product];
              return { ...listProduct, products: newProducts };
            }
            return listProduct;
          });
          return { ...state, listProduct: newListProductsAddProduct };
      default:
        return state;
    }
  };
  
  export default reducer;
  