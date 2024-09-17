import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../actions/orderActions';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Success from '../components/Success';

export default function Checkout({ subtotal }) { // subtotal should be passed as a prop

    const orderstate = useSelector((state) => state.placeOrderReducer)
    const {loading, error, success} = orderstate

    const dispatch = useDispatch(); // Call the dispatch function correctly

    function tokenHandler(token) {
        console.log(token);
        // Dispatch the token and subtotal to place an order
        dispatch(placeOrder(token, subtotal)); // Pass subtotal correctly
    }

    return (
        <div>

            {loading && (<Loading/>)}
            {error && (<Error error = 'Something Went Wrong' />)}
            {success && (<Success success = 'Your Order Placed Successfully' />)}



            <StripeCheckout
                amount={subtotal * 100} // Stripe expects the amount in cents (smallest unit)
                shippingAddress
                billingAddress // Add billingAddress to comply with the requirement
                token={tokenHandler} // Handles the token Stripe sends back
                currency='INR' // Ensure currency is set
                stripeKey="pk_test_51Px3ElP1xVcuae8X6LcoIrOtuCbbvg5YusXNb6dAX2Kglzjo5Uw2brCpyQ5oO1PPfeWgsHBk8sPKwdZ8gHfLxe3M008yaR9BlF" // Use your publishable test key
            >
                <button className='btn'>Pay Now</button>
            </StripeCheckout>
        </div>
    );
}
