import React, { useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Firebase/Provider';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);
const Payment = () => {
    const {user}=useContext(AuthContext)
  //  const location = useLocation();
  //  const queryParams = new URLSearchParams(location.search);
    //const price = queryParams.get('price');
  // console.log('price much',price)
   const [classes, setClasses] = useState([])
   const  loader =useLoaderData([]);
   console.log('loaderr.....',loader)
   const price =parseInt(loader.price)

    return (
        <div>
            <h3>.....Payment....... </h3>
          
            <Elements stripe = {stripePromise}> <CheckOutForm loader={loader} price ={price}  ></CheckOutForm> </Elements>
        </div>
    );
};

export default Payment;

