import { Product } from "../../../models/Product";

export const addProductToList = (product: Product, listProductId: string) => {
    return {
      type: 'ADD_PRODUCT_TO_LIST',
      payload: {
        product,
        listProductId
      }
    };
  };
  