import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Provider } from "react-redux";
import store from "./store";

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
