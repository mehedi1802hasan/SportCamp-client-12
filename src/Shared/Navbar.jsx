import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
        
        <li><Link to='/'>Instructor</Link></li>
        <li><Link to='/'>Classes</Link></li>
        <li><Link to='/'>Dashboard</Link></li>
        <li><Link to='/login'>Login</Link></li>
        
      </ul>
    </div>
    <Link className="text-xl normal-case btn btn-ghost">SportCapm</Link>
  </div>
  <div className="hidden navbar-center lg:flex">
    <ul className="px-1 menu menu-horizontal">
    <li><Link to='/'>Home</Link></li>
        
        <li><Link to='/'>Instructor</Link></li>
        <li><Link to='/'>Classes</Link></li>
        <li><Link to='/'>Dashboard</Link></li>
        <li><Link to='/Login'>Login</Link></li>
       

    </ul>
  </div>
  <div className="navbar-end">
 <img  className='w-10 h-10' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiGSOXM7ck96MBiHMlDUg9lkkLDyJ_6Wsix26Q8ZmKVTWTYJcOY_L7_acMHQ_mbAFJCk4&usqp=CAU' alt="" />
 <li><Link to='/'>LogOut</Link></li>
  </div>
</div>
        </div>
    );
};

export default Navbar;