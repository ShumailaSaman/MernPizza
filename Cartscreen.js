// components/CartScreen.js

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../actions/cartActions";
import Checkout from "../components/Checkout";

export default function CartScreen() {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;

  const dispatch = useDispatch();

  // Increase item quantity
  const increaseQuantity = (item) => {
    dispatch(addToCart(item, item.quantity + 1, item.variant));
  };

  // Decrease item quantity, remove item if quantity becomes 0
  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(addToCart(item, item.quantity - 1, item.variant));
    } else {
      dispatch(deleteFromCart(item._id)); // Use item._id to delete
    }
  };

  // Handle delete action
  const handleDelete = (itemId) => {
    console.log("Deleting item with ID:", itemId); // Debugging log
    dispatch(deleteFromCart(itemId));
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 style={{ fontSize: "40px" }}>My Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item, index) => (
              <div className="flex-container" key={item._id || index}>
                <div className="text-left m-1 w-100">
                  <h1>
                    {item.name} [{item.variant}]
                  </h1>
                  <h1>
                    Price: {item.quantity} * {item.prices[0][item.variant]} ={" "}
                    {item.quantity * item.prices[0][item.variant]}
                  </h1>
                  <h1 style={{ display: "inline" }}>Quantity :</h1>
                  <i
                    className="fa fa-plus"
                    aria-hidden="true"
                    onClick={() => increaseQuantity(item)}
                    style={{ cursor: "pointer", margin: "0 10px" }}
                  ></i>
                  <b>{item.quantity}</b>
                  <i
                    className="fa fa-minus"
                    aria-hidden="true"
                    onClick={() => decreaseQuantity(item)}
                    style={{ cursor: "pointer", margin: "0 10px" }}
                  ></i>
                  <hr />
                </div>

                <div className="m-1 w-100">
                  <img
                    src={item.image}
                    style={{ height: "80px", width: "80px" }}
                    alt={item.name}
                  />
                </div>

                <div className="m-1 w-100">
                  <i
                    className="fa fa-trash mt-5"
                    onClick={() => handleDelete(item._id)} // Use handleDelete function
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="col-md-4 text-right">
          <h2 style={{ fontSize: "45px" }}>SubTotal: {subtotal} /-</h2>
          <Checkout subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
}
