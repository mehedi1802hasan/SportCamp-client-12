import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const handleLogin=()=>{
        console.log('nai')
    }
    const handleGoogleLogin=()=>{
        console.log('nai...')
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
                <input type="password" name="password" placeholder="please enter your password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
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