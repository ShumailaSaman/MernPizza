// pizzaReducers.js

// Reducer for getting all pizzas
export const getAllPizzasReducer = (state = { pizzas: [] }, action) => {
  switch (action.type) {
    case "GET_PIZZAS_REQUEST":
      return { loading: true, pizzas: [] }; // Reset pizzas while loading
    case "GET_PIZZAS_SUCCESS":
      return { loading: false, pizzas: action.payload };
    case "GET_PIZZAS_FAILED":
      return { loading: false, error: action.payload, pizzas: [] }; // Ensure pizzas is reset on error
    default:
      return state;
  }
};

// Reducer for filtering pizzas
export const getfilterPizzasReducer = (state = { pizzas: [] }, action) => {
  switch (action.type) {
    case "GET_FILTER_PIZZAS_REQUEST":
      return { loading: true, pizzas: [] }; // Reset pizzas while loading
    case "GET_FILTER_PIZZAS_SUCCESS":
      return { loading: false, pizzas: action.payload };
    case "GET_FILTER_PIZZAS_FAILED":
      return { loading: false, error: action.payload, pizzas: [] }; // Ensure pizzas is reset on error
    default:
      return state;
  }
};

// Reducer for getting pizza by ID
export const getPizzaByIdReducer = (state = { pizza: {} }, action) => {
  switch (action.type) {
    case "GET_PIZZABYID_REQUEST":
      return { loading: true, pizza: {} }; // Reset pizza while loading
    case "GET_PIZZABYID_SUCCESS":
      return { loading: false, pizza: action.payload };
    case "GET_PIZZABYID_FAILED":
      return { loading: false, error: action.payload, pizza: {} }; // Ensure pizza is reset on error
    default:
      return state;
  }
};

// Reducer for updating a pizza
export const updatePizzaReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_PIZZA_REQUEST":
      return { loading: true };
    case "UPDATE_PIZZA_SUCCESS":
      return { loading: false, success: true };
    case "UPDATE_PIZZA_FAILED":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// Reducer for adding a pizza
export const addPizzaReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PIZZA_REQUEST":
      return { loading: true };
    case "ADD_PIZZA_SUCCESS":
      return { loading: false, success: true };
    case "ADD_PIZZA_FAILED":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
