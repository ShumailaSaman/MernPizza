import axios from "axios";
import { response } from "express";

// Action to get all pizzas
export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });

  try {
    const response = await axios.get("/api/pizzas/getallpizzas");
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAILED", payload: error.message });
  }
};

// Action to get pizza by ID
export const getPizzaById = (pizzaid) => async (dispatch) => {
  dispatch({ type: "GET_PIZZABYID_REQUEST" });

  try {
    const response = await axios.post(`/api/pizzas/getpizzabyid`, { pizzaid }); // Use POST with pizza ID in the body
    dispatch({ type: "GET_PIZZABYID_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PIZZABYID_FAILED", payload: error.message });
  }
};

// Action to update an existing pizza
export const updatePizza = (pizza) => async (dispatch) => {
  dispatch({ type: "UPDATE_PIZZA_REQUEST" });

  try {
    // Use PUT method and pass the pizza id in the URL
    const response = await axios.put(`/api/pizzas/updatepizza/${pizza._id}`, pizza, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({ type: "UPDATE_PIZZA_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "UPDATE_PIZZA_FAILED", payload: error.message });
  }
};

// Action to filter pizzas
export const filterPizzas = (searchKey, category) => async (dispatch) => {
  dispatch({ type: "GET_FILTER_PIZZAS_REQUEST" });

  try {
    // Use GET request with query parameters
    const response = await axios.get("/api/pizzas/filter", {
      params: { searchKey, category },
    });
    dispatch({ type: "GET_FILTER_PIZZAS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_FILTER_PIZZAS_FAILED", payload: error.message });
  }
};

// Action to add a new pizza
export const addPizza = (pizza) => async (dispatch) => {
  dispatch({ type: "ADD_PIZZA_REQUEST" });

  try {
    const response = await axios.post("/api/pizzas/addpizza", pizza, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({ type: "ADD_PIZZA_SUCCESS", payload: response.data }); // Include the response data
  } catch (error) {
    console.error("Add pizza error:", error.message);
    dispatch({ type: "ADD_PIZZA_FAILED", payload: error.message });
  }
};



// Action to delete a pizza
export const deletePizza = (pizzaid) => async dispatch => {

  try {
    const response = await axios.post('/api/pizzas/deletepizza', { pizzaid });
    alert('Pizza Deleted Successfully')
    console.log(response);
    window.location.reload()
  } catch (error) {
    alert('Something Went Wrong')
    console.log(error)
  }
};
