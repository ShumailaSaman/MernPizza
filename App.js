import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Ordersscreen from './screens/Ordersscreen';
import Adminscreen from './screens/Adminscreen';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homescreen />} /> {/* Route for the root URL */}
        <Route path="/about" element={<Homescreen />} />
        <Route path="/cart" element={<Cartscreen />} />
        <Route path="/register" element={<Registerscreen />} />
        <Route path="/login" element={<Loginscreen />} />
        <Route path="/orders" element={<Ordersscreen />} />
        <Route path="/admin/*" element={<Adminscreen />} /> {/* Correct path for admin routes */}
      </Routes>
    </Router>
  );
}

export default App;
