export const createListProduct = (name: string) => {
    return {
      type: 'ADD_LIST_PRODUCT',
      payload: {
        name
      }
    };
  };
  