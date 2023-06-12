import { LISTPRODUCT_DATA } from '../../../data/stub';
const initialState = {
    listProduct: LISTPRODUCT_DATA,
};
  
    // @ts-ignore
  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_PRODUCT':
          // @ts-ignore
          // Gérer sauvegarde produit
          console.log('Save product');
          return state;

        case 'DELETE_PRODUCT':
          // @ts-ignore
           // Gérer suppression produit
      const listProducts = state.listProduct.map((listProduct) => {
        if (listProduct.id === action.payload[0]) {
          console.log('identique');

          const newProducts = listProduct.products.filter(
            (product) => product.id !== action.payload[1].id
          );
          return { ...listProduct, products: newProducts };
        }
        return listProduct;
      });
      console.log(listProducts);
      
      return { ...state, listProduct: listProducts };
      default:
        return state;
    }
  };
  
  export default reducer;
  