// actions/cartActions.js

export const addToCart = (pizza, quantity, variant) => (dispatch, getState) => {
  const cartItem = {
    name: pizza.name,
    _id: pizza._id,
    image: pizza.image,
    variant: variant,
    quantity: Number(quantity),
    prices: pizza.prices,
    price: pizza.prices[0][variant] * quantity,
  };

  if (cartItem.quantity > 10) {
    alert('You cannot add more than 10 quantities');
  } else if (cartItem.quantity < 1) {
    dispatch({ type: 'DELETE_FROM_CART', payload: cartItem._id });
  } else {
    dispatch({
      type: 'ADD_TO_CART',
      payload: cartItem,
    });
  }

  // Update localStorage with the current cart items
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const deleteFromCart = (itemId) => (dispatch, getState) => {
  dispatch({
    type: 'DELETE_FROM_CART',
    payload: itemId,
  });

  // Update localStorage after deletion
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};
