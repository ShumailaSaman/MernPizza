import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Pizzaslist from './Pizzaslist';
import Userslist from './Userslist';
import Orderslist from './Orderslist';
import Addpizza from './Addpizza';
import Editpizza from './Editpizza';

export default function Adminscreen() {
  const userstate = useSelector(state => state.loginUserReducer);
  const { currentUser } = userstate;
  const navigate = useNavigate(); // Use navigate for redirection

  useEffect(() => {
    if (!currentUser || !currentUser.isAdmin) {
      navigate('/'); // Redirect if not admin
    }
  }, [currentUser, navigate]);

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h2 style={{ fontSize: '35px', textAlign: 'center' }}>Admin Panel</h2>
          <ul className='adminfunctions' style={{ textAlign: 'center' }}>
            <li><Link to="userslist">Users List</Link></li>
            <li><Link to="pizzaslist">Pizzas List</Link></li>
            <li><Link to="addpizza">Add New Pizza</Link></li>
            <li><Link to="orderslist">Orders List</Link></li>
          </ul>

          <Routes>
            <Route path="userslist" element={<Userslist />} />
            <Route path="pizzaslist" element={<Pizzaslist />} />
            <Route path="orderslist" element={<Orderslist />} />
            <Route path="addpizza" element={<Addpizza />} />
            <Route path="editpizza/:pizzaid" element={<Editpizza />} />
            <Route path="*" element={<Userslist />} /> {/* Handle unmatched routes */}
          </Routes>
        </div>
      </div>
    </div>
  );
}
