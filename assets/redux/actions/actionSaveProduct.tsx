export const saveProduct = (name: string, description: string, category: string) => {
    return {
      type: 'ADD_PRODUCT',
      payload: {
        name,
        description,
        category
      }
    };
  };
  