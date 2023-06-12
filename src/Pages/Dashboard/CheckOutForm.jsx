import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Firebase/Provider';
const CheckOutForm = ({price}) => {
    const {user}=useContext(AuthContext);
    console.log('price..........',price)
    const stripe = useStripe()
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    //const [transactionId,setTrasactionId]=useState('')
    const [clientSecret,setClientSecret] =useState('');
    // useEffect(()=>{
    //     console.log(price)
    //     fetch('http://localhost:5000/create-payment-intent', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(price)
    //      })
    //    .then(res=>res.json())
    //    .then(data=>{
    //        console.log(data.clientSecret)
    //       setClientSecret(data.clientSecret)
    //     })
    //  },[price])
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
              console.log('carddddddd',card)
            return;
        }

        console.log("....card....", card)

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })
        if (error) {
            console.log('error', error)
            setCardError(error.message)
        }
        else {
            setCardError('')
console.log('niii')
           //todo
        }
       
        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: user?.displayName || 'anonymous',
                  email: user?.email || 'unknown'
                },
              },
            },
          );
          if(confirmError){
            console.log(confirmError)
          //  setCardError('')
          }
          console.log('paymentintent....',paymentIntent)

    }
    return (
        <div>
            <h5 className='text-3xl font-bold text-center text-green-500'> Price:  {price}</h5>
          
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='mt-5 btn btn-primary btn-sm' type="submit" disabled={!stripe }>
                    Pay
                </button>
            </form>
            
            {cardError && <p className='text-red-600'>{cardError}</p>}
        </div>
    );
};

export default CheckOutForm;