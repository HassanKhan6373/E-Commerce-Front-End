
export const addCart = (product) => {
    return {
      type: "ADDITEM",
      payload: {
        product: product,
      },
    };
  };
  
  
  export const delCart = (product) =>{
      return {
          type:"DELITEM",
          payload:{product}
      }
  }
  export const deleteCartItem = (productId) => {
    return {
      type: "DELETEITEM",
      payload: {
        productId: productId,
      },
    };
  };

  
  
  
  