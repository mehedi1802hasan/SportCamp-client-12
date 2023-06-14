import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Firebase/Provider';
import useAxiosSecure from '../../hook/useAxiosSecure';
import Swal from 'sweetalert2';
//import './CheckOutForm.css'
const CheckOutForm = ({price,loader}) => {
    const {user}=useContext(AuthContext);
    console.log('price..........',price)
    const stripe = useStripe()
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [axiosSecure]=useAxiosSecure();
   const [processing,setProcessing]=useState(false)
    const [transactionId,setTrasactionId]=useState('')
    const [clientSecret,setClientSecret] =useState('');
    
    useEffect(()=>{
        axiosSecure.post('/create-payment-intent', {price})
        .then(res =>{
           console.log( res.data.clientSecret);
           setClientSecret(res.data.clientSecret);
        }) 
           },[])
    
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
       setProcessing(true);
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
          setProcessing(false)
          if(paymentIntent.status === 'succeeded'){
            setTrasactionId(paymentIntent.id)
            const transactionId = paymentIntent.id
            ////
            const payment ={
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                seat: parseInt(loader.seat),
                date: new Date(),
              classId: loader._id,
              className: loader.className,
              instructorName: loader.instructorName,
              image:loader.image
               }
               axiosSecure.post('/payments',payment)
               .then(res=>{
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'successfully ! payment information added in the mongodb ',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
               })
               
              }          
            }
            
            
            
    //   }
    // }
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
                <button className='mt-5 btn btn-primary btn-sm' type="submit" disabled={!stripe || !clientSecret || processing }>
                    Pay
                </button>
            </form>
            
            {cardError && <p className='text-red-600'>{cardError}</p>}
            {
                transactionId && <p className='text-green-500'>Transaction complete with transactionId :{transactionId}</p>
            }
        </div>
    );
};

export default CheckOutForm;