import React, { useState } from 'react';
import Swal from 'sweetalert2'
import {  Slide } from "react-awesome-reveal";

const Subscription = () => {
    const [email,setEmail]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        setEmail('')
        console.log(email)
        let timerInterval
Swal.fire({
  title: 'Sorry! try again',
  html: 'we saved your email in our database ',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
    }
    const hanldeEmail=(e)=>{
        setEmail(e.target.value)
    }
    return (
        <section style={{boxShadow:"2px 2px 9px 2px rgb(100 116 139) "}} className='md:w-8/12   mx-auto p-16 my-16'>
            <div className='md:flex justify-center items-center gap-48'>
                <div><img src="https://food-express-client.web.app/assets/discount-c641d25b.svg" alt="" /></div>
                <div>
                    <h3 className='text-center text-red-500 text-3xl'>Visit To Our Zone
                    </h3>
                    <Slide> <h4 className='text-center text-4xl font-bold my-3'><span className='text-yellow-500 font-serif'> 20%</span> Discount </h4></Slide>
                    <p className='mx-auto md:w-8/12  font-serif'>Enter your email & check are you available  for 20% 
                        discount from your first order.</p>
                </div>
            </div>
            <form onSubmit={handleSubmit} className='mt-10 w-8/12 mx-auto flex justify-center'>
                <input className='text-center p-3 md:w-80 border-2 border-red-500' type="email" value={email} name='email' onChange={hanldeEmail} placeholder='enter your email' required />
                <input  type="submit" value={'check'} className='bg-red-600 md:w-28' />
            </form>

        </section>
    );
};

export default Subscription;