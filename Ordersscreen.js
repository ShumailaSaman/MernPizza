import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../actions/orderActions';
import Error from '../components/Error';
import Loading from '../components/Loading';

export default function Ordersscreen() {
  const dispatch = useDispatch();

  // Correct useSelector hook
  const orderstate = useSelector(state => state.getUserOrdersReducer);
  const { orders, error, loading } = orderstate;
  console.log("orders:", orders);

  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h2 style={{ fontSize: '35px', textAlign: 'center' }}>My Orders</h2>
      <hr />


      <div className="row" style={{ width: '100%', maxWidth: '1200px', padding: '0 15px', display: 'flex', justifyContent: 'center' }}>
        {loading && <Loading />}
        {error && <Error error={error} />}
        {orders && orders.length === 0 && <p>No orders found.</p>}
        {orders && orders.map(order => (
          <div className="col-md-8 m-2 p-1 " key={order._id} style={{ marginBottom: '20px',  textAlign: 'left', backgroundColor: 'red', color: 'white' }}>
            <div className="flex-container" style={{ padding: '20px', borderRadius: '5px'  }}>
              <div className='text-left w-100 m-1 '>
                <h2 style={{ fontSize: '25px' }}>Items</h2>
                <hr />

                {order.orderItems.map(item => (
                  <div key={item._id}>
                    <p>
                      {item.name} [{item.variant}] * {item.quantity} = {item.price}
                    </p>
                  </div>
                ))}
              </div>

              <div className='text-left w-100 m-1'>
                <h2 style={{ fontSize: '25px' }}>Address</h2>
                <hr />

                <p>Street: {order.shippingAddress.street}</p>
                <p>City: {order.shippingAddress.city}</p>
                <p>Country: {order.shippingAddress.country}</p>
                <p>Pincode: {order.shippingAddress.pincode}</p>
              </div>

              <div className='text-left w-100 m-1'>
                <h2 style={{ fontSize: '25px' }}>Order Info</h2>
                <hr />

                <p>Order Amount: {order.orderAmount}</p>
                <p>Date: {order.createdAt.substring(0, 10)}</p>
                <p>Transaction Id: {order.transactionId}</p>
                <p>Order Id: {order._id}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
