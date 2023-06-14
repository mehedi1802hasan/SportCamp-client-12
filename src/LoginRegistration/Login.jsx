import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../Firebase/Provider';
import Swal from 'sweetalert2';
import { useState } from 'react';
const Login = () => {
  const {loginUser,googleLogin}=useContext(AuthContext)
  const [show,setShow]=useState(false);
  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const Login = { email, password };
    console.log(Login);
    loginUser(email, password)
      .then(result => {
        const logined = result.user;
        console.log(logined);
       // navigate(from, { replace: true }); // Use navigate instead of history.replace
        Swal.fire({
          title: 'Wow! Matching!!',
          text: 'Successfully Login done',
          icon: 'success',
          confirmButtonText: 'Okay'
        });
      })
      .catch(error => {
        console.log(error);
        Swal.fire({
          title: 'Sorry',
          text: 'Your information is not correct!! Try again',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      });
  };
  const handleGoogleLogin=()=>{
    googleLogin()
    .then(result=>{
      const googlelogged=result.user;
      
      /////
      const saveUser={name:googlelogged.displayName,email: googlelogged.email}
      fetch('http://localhost:5000/users',{
        method:"POST",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(saveUser)
      })
      .then(res=>res.json())
      .then(()=>{
      
           // navigate(from, { replace: true });

        
      })
      ////
      console.log(googlelogged)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Google Login successfully',
        showConfirmButton: false,
        timer: 1500
      })
    })
     .catch(error=>{
      console.log(error.message)
     })
  }
    return (
        <div className='mx-auto max-w-7xl'>
            <div>
      <div className="min-h-screen hero bg-base-200">
        <div className="flex-col md:gap-24 hero-content lg:flex-row">
          <div className="w-1/3 text-center lg:text-left">
            <img src="https://www.naxeed.com/themes/default/images/login-img.png" alt="" />
          </div>
          <div className="flex-shrink-0 max-w-sm shadow-2xl wfull card bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <h3 className="text-3xl font-bold text-center text-blue-600"> Login</h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="please enter email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                  
                </label>
                <input type={show? 'text':'password'}name="password" placeholder="please enter your password" className="input input-bordered " required />
               <p className='mt-2' onClick={()=>setShow(!show)}>
                <small >
                  {show? <span>
                    <img className='h-7 w-7' src="https://cdn-icons-png.flaticon.com/128/9055/9055153.png" alt="" /> </span> : 
                    <span ><img className='h-7 w-7' src="https://cdn-icons-png.flaticon.com/128/159/159604.png" alt="" /></span>
                 }
                </small>
                
               </p>
              </div>
              <div className="mt-6 form-control">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <h3 className='my-3 font-bold text-center'>Are you new? <Link className='text-green-700' to='/registration'>Registration</Link></h3>
            <button className="mx-auto mb-3 w-52 btn btn-warning hover:bg-orange-500" onClick={handleGoogleLogin}>
              <FaGoogle />Google
            </button>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Login;