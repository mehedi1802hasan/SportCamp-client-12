import React from 'react';
import { Link } from 'react-router-dom';
const Registration = () => {
    const handleRegistration=()=>{
        console.log('kono registration hoi nai')
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
          <input type="text" name='imgUrl' placeholder="please enter image url" className="input input-bordered" />
        </div>
        <div className="mt-6 form-control">
          <button className="btn btn-warning hover:bg-orange-500">Registration</button>
        </div>
        <h3 className='my-3 font-bold text-center '>Have you account? <Link className='text-green-700' to='/login'>Login</Link></h3>

      </form>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Registration;