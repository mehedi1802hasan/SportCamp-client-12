import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Firebase/Provider';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Registration = () => {
  const {signUpUser,user,updateUserProfile}=useContext(AuthContext);
  const [error,setError]=useState('')
  const navigate =useNavigate()
  const handleRegistration=event=>{
    event.preventDefault();
    const form=event.target;
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;
    const photoURL=form.imgUrl.value;
   const registration={name,email,password,photoURL};
   if (!/(?=.*?[A-Z])/.test(password)) {
    setError('Please add at least 1 uppercase letter.');
    return;
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    setError('Please add at least 1 special character.');
    return;
  } else if (password.length < 6) {
    setError('Please add at least 6 characters.');
    return;
  }

  // console.log(registration)
   signUpUser(email,password)
   .then(result=>{
    const signUped=result.user;
    console.log(signUped)
    // Swal.fire({
    //   title: 'GOOD!',
    //   text: 'Congratulations.Successfully Registration completed!!',
    //   icon: 'success',
    //   confirmButtonText: 'Okay'
    // })
  updateUserProfile(name, photoURL)
  .then(()=>{
    console.log('user profile info updated')
    const saveUSer={name: name, email,image:photoURL}
    fetch('http://localhost:5000/users',{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(saveUSer)
    })
    .then(res=>res.json())
    .then(data =>{
      if(data.insertedId){
        Swal.fire({
          title: 'GOOD!',
          text: 'user crated successfully !!',
          icon: 'success',
          confirmButtonText: 'Okay'
        })
        navigate('/')
      }
    
    })
   
  })
  .catch(error=>{
    console.log(error)
  })
//

   })
   .catch(error=>{
    console.log(error.message)
    alert(error.message,'noope')
   })
}
    return (
        <div>
            <div>
          <div className="min-h-screen hero bg-base-200">
  <div className="flex-col hero-content lg:flex-row">
    <div className="w-1/2 text-center lg:text-left">
      
      <img  src='https://crm.easytrax.com.bd/client/client_registration/new/images/cover-img.png' alt="" />
    
    </div>
    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
      <form onSubmit={handleRegistration} className="card-body">
      <h3 className='text-3xl font-bold text-center'> Registration</h3>
        <div className="form-control">
        <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="please enter your name" className="input input-bordered" required />
       
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email"placeholder="please enter email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="please enter your password" className="input input-bordered" required/>
          <label className="label">
            <span className="label-text">Img URL</span>
          </label>
          <input type="text" name='imgUrl' placeholder="please enter image url" className="input input-bordered" required />
        </div>
        <div className="mt-6 form-control">
          <button className="btn btn-warning hover:bg-orange-500">Registration</button>
        </div>
        <h3 className='my-3 font-bold text-center '>Have you account? <Link className='text-green-700' to='/login'>Login</Link></h3>

      </form>
      <p className='text-center text-red-600'>{error}</p>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Registration;