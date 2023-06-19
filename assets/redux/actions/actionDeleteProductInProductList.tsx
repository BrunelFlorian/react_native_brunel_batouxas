import { Product } from "../../../models/Product";

export const deleteProductInProductList = (product: Product) => {
    return {
      type: 'DELETE_PRODUCT_IN_PRODUCT_LIST',
      payload: [product]
    };
};
  