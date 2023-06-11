import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import { AuthContext } from '../Firebase/Provider';
import { useContext } from 'react';

const Dashboard = () => {
  const [role, setRole] = useState('');
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // Fetch user data and extract the role
    fetch('http://localhost:5000/users')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched user data:', data);

        // Check if the data array is empty or contains the expected user information
        if (data.length === 0) {
          console.log('No user data found.');
          return;
        }

        // Print the email of each user in the data array
        data.forEach((user) => {
          console.log('User email:', user.email);
        });

        // Match user's email from AuthContext data with the email in the array
        const ua = data.find((u) => u.email === user.email);
        console.log('Matched user:', ua);

        if (ua) {
          setRole(ua.role);
        }
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, [user.email]);

  console.log('Role:', role);

  return (
    <div>
      <Navbar />
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col drawer-content">
          <Outlet />
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="h-full p-4 menu w-80 bg-base-200 text-base-content">
            {role === 'admin' && (
              <>
                <li>
                  <Link to="manageuser">Manage User</Link>
                </li>
                <li>
                  <Link to="manageclasses">Manage Classes</Link>
                </li>
              </>
            )}
            {role === 'instructor' && (
              <>
                <li>
                  <Link to="addclass">Add Class</Link>
                </li>
                <li>
                  <Link to="myclasses">My Classes</Link>
                </li>
              </>
            )}
            {!role && (
              <>
                <li>
                  <Link to="myselectedclasses">My Selected Classes</Link>
                </li>
                <li>
                  <Link to="myenrolledclasses">My Enrolled Classes</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
