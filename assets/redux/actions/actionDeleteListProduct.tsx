import { Product } from "../../../models/Product";

export const deleteListProduct = (idList: string) => {
    return {
      type: 'DELETE_LIST_PRODUCT',
      payload: [idList]
    };
};
  