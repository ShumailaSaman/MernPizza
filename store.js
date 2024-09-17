import { combineReducers } from "redux";
import { createStore, applyMiddleware } from 'redux';
import {thunk} from "redux-thunk"; // Corrected import
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPizzasReducer, addPizzaReducer, getfilterPizzasReducer, getPizzaByIdReducer, updatePizzaReducer } from "./reducers/pizzaReducers";
import { cartReducer } from "./reducers/cartReducer";
import { registerUserReducer, loginUserReducer } from "./reducers/userReducer";
import { placeOrderReducer, getUserOrdersReducer } from "./reducers/orderReducer";

// Combine reducers
const rootReducer = combineReducers({
  getAllPizzasReducer,
  cartReducer,
  registerUserReducer,
  loginUserReducer,
  placeOrderReducer,
  getUserOrdersReducer,
  addPizzaReducer,
  getPizzaByIdReducer,
  updatePizzaReducer, // Make sure this is included
  getfilterPizzasReducer
});

// Initial state
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;

const initialState = {
  cartReducer: {
    cartItems
  },
  loginUserReducer: {
    currentUser
  }
};

// Compose enhancers
const composeEnhancers = composeWithDevTools({});

// Create store with middleware and dev tools extension
const store = createStore(
  rootReducer, // Corrected to use rootReducer
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
