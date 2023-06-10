import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
const Dashboard = () => {
    const isAdmin =true;
    const isInstructors =true;
    const isUser=true;
    
    
    return (
        <div>
            <Navbar/>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="flex flex-col items-center justify-center drawer-content">
  <Outlet/>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="h-full p-4 menu w-80 bg-base-200 text-base-content">
 
     {
        isAdmin && 
        <div>
            <li><Link to='manageuser'>ManageUser</Link></li>
        <li><Link to='manageclasses'>Manage Classes</Link></li>
        </div>
     }
     {
        isInstructors && 
        <div>
            <li><Link to='addclass'>Add Class</Link></li>
        <li><Link to='myclasses'>My Classes</Link></li>
        </div>
     }
     {
        isUser && 
        <div>
            <li><Link to='myselectedclasses'>My selected Classes</Link></li>
        <li><Link to='myenrolledclasses'>My Enrolled Classes</Link></li>
        </div>
     }
    </ul>
  
  </div>
</div>
<Footer/>
        </div>
    );
};

export default Dashboard;