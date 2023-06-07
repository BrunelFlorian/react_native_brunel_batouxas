const initialState = {};
  
    // @ts-ignore
  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_PRODUCT':
        // @ts-ignore
        // Gérer sauvegarde produit
        console.log('Save product');
        return state;
      default:
        return state;
    }
  };
  
  export default reducer;
  