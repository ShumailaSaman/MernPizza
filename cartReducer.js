// reducers/cartReducer.js

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const alreadyExists = state.cartItems.find(item => item._id === action.payload._id);
      if (alreadyExists) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item._id === action.payload._id ? action.payload : item
          )
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload]
        };
      }

    case "DELETE_FROM_CART":
      const idToDelete = typeof action.payload === 'object' ? action.payload._id : action.payload;
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item._id !== idToDelete)
      };

    default:
      return state;
  }
};
