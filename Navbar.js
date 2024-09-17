import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../actions/userActions";

export default function Navbar() {
  const cartstate = useSelector(state => state.cartReducer);
  const userstate = useSelector(state => state.loginUserReducer);
  const { currentUser } = userstate; // Accessing currentUser from userstate correctly
  const dispatch = useDispatch();

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded d-flex">
        <a className="navbar-brand" href="/">
          Saman's Crust
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto">
            {currentUser ? (
              <div className="dropdown mt-2">
                <a
                  style={{ color: 'black' }}
                  className="dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {currentUser.name} {/* Display the user's name */}
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="/orders">
                    Orders
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => {
                      dispatch(logoutUser()); // Corrected the logout dispatch
                    }}
                  >
                    <li>Logout</li>
                  </a>
                </div>
              </div>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login" aria-label="Login">
                  Login
                </a>
              </li>
            )}

            {cartstate.cartItems.length > 0 && (
              <li className="nav-item">
                <a className="nav-link" href="/cart" aria-label="Cart">
                  Cart {cartstate.cartItems.length}
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
