
export const ADD_ITEM = "ADDITEM";
export const DELETE_ITEM = "DELITEM";


export const addCart = (product) => {
  return {
    type: ADD_ITEM,
    payload: product,
  };
};


export const delCart = (productId) => {
  return {
    type: DELETE_ITEM,
    payload: productId, 
  };
};
