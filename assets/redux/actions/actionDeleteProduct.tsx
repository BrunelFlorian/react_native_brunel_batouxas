import { Product } from "../../../models/Product";

export const deleteProduct = (idList: string, product: Product) => {
    return {
      type: 'DELETE_PRODUCT',
      payload: [idList, product]
    };
};
  