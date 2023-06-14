import { v4 as uuidv4 } from 'uuid';
import { LISTPRODUCT_DATA, PRODUCT_DATA } from '../../../data/stub';
import { Product } from "../../../models/Product";

const initialState = {
  listProduct: LISTPRODUCT_DATA,
  products: PRODUCT_DATA
};
  
    // @ts-ignore
  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
          // @ts-ignore
          const newListProduct = [...state.products, new Product(uuidv4(), action.payload.name, action.payload.description, action.payload.category)];
          console.log(newListProduct);
          
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
      default:
        return state;
    }
  };
  
  export default reducer;
  