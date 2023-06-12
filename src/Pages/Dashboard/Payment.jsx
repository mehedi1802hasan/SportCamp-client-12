import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
import { useLocation } from 'react-router-dom';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);
const Payment = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const price = queryParams.get('price');
   console.log('price much',price)

    return (
        <div>
            <h3>.....Payment....... </h3>
          
            <Elements stripe = {stripePromise}> <CheckOutForm price ={price}  ></CheckOutForm> </Elements>
        </div>
    );
};

export default Payment;

