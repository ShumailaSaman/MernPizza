import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas, deletePizza } from "../actions/pizzaActions";
import pizzasData from "../pizzasdata"; // Fallback data
import Loading from "../components/Loading";
import Error from "../components/Error";
import Filter from "../components/Filter";
import { Link } from "react-router-dom";

export default function Pizzaslist() {
  const [pizzas, setPizzas] = useState([]);
  const dispatch = useDispatch();
  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas: pizzasFromState = [], error, loading } = pizzasstate || {};

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

  const handleDelete = (pizzaId) => {
    console.log('Delete clicked for pizza:', pizzaId);
    // Add logic for delete action
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Pizzas List</h2>
      {loading && <Loading />}
      {error && <Error error='Something Went Wrong' />}
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Prices</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pizzas.map(pizza => (
            <tr key={pizza._id}>
              <td>{pizza.name}</td>
              <td>
                Small: {pizza.prices['small']} <br />
                Medium: {pizza.prices['medium']} <br />
                Large: {pizza.prices['large']}
              </td>
              <td>{pizza.category}</td>
              <td>

                <i
                  className="fa fa-trash m-1"
                  onClick={() => dispatch(deletePizza(pizza._id))}
                  style={{ cursor: 'pointer' }}
                ></i>

                <Link to={`/admin/editpizza/${pizza._id}`}>
                  <i
                    className="fa fa-edit m-1"
                    style={{ cursor: 'pointer' }}
                  ></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
