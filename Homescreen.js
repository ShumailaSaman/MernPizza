import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import Pizza from "../components/Pizza";
import pizzasData from "../pizzasdata"; // Fallback data
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success"
import Filter from "../components/Filter"

export default function Homescreen() {
  const [pizzas, setPizzas] = useState([]);
  const dispatch = useDispatch();
  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas: pizzasFromState = [], error, loading } = pizzasstate || {};
  console.log("pizzas:",pizzas)

  // Fetch pizzas from backend
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  // Set pizzas from state or fallback to local data
  useEffect(() => {
    if (!loading && !error) {
      setPizzas(pizzasFromState.length ? pizzasFromState : pizzasData);
    }
  }, [loading, error, pizzasFromState]);

  return (
    <div>
      <div className="row justify-content-center">
        {loading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
            <Loading />
          </div>
        ) : error ? (
          <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
            <Error error="Something Went Wrong" />
          </div>
        ) : (
          pizzas.map((pizza) => (
            <div key={pizza._id} className="col-md-3 m-3">
              <Pizza pizza={pizza} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
