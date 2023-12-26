import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Firebase/Provider';
import { FaSun } from 'react-icons/fa';
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleThemeChange = () => {
    const htmlElement = document.querySelector('html');
    const currentTheme = htmlElement.getAttribute('data-theme');

    // Toggle between dark and light themes
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    htmlElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className=''>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className=" z-10 p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="text-[#db2777] font-bold" to="/">
                  Home
                </Link>
              </li>

              <li>
                <Link className="text-[#db2777] font-bold" to="/instructors">
                  Instructor
                </Link>
              </li>
              <li>
                <Link className="text-[#db2777] font-bold" to="/classes">
                  Classes
                </Link>
              </li>
              {user && (
                <li>
                  <Link className="text-[#db2777] font-bold" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <>
            <img
              className="w-10 h-10 md:ml-3 lg:ml-3"
              src="https://i.ibb.co/v1RCr5d/2954946.png"
              alt=""
            />

            <Link className="text-2xl normal-case btn btn-ghost text-[#db2777] font-bold">
              {' '}
              SportCamp
            </Link>
          </>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">
            <li>
              <Link className="text-[#db2777] font-bold" to="/">
                Home
              </Link>
            </li>

            <li>
              <Link className="text-[#db2777] font-bold" to="/instructors">
                Instructor
              </Link>
            </li>
            <li>
              <Link className="text-[#db2777] font-bold" to="/classes">
                Classes
              </Link>
            </li>
            {user && (
              <li>
                <Link className="text-[#db2777] font-bold" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="md:mr-20 lg:mr-20 navbar-end">
          <ul className="flex items-center justify-center gap-5">
            {user ? (
              <>
                <img className="w-10 h-10" src={user.photoURL} alt="" />
                <li>
                  <Link
                    className="text-[#db2777] font-bold"
                    onClick={handleLogout}
                    to="/"
                  >
                    LogOut
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link className="text-[#db2777] font-bold" to="/Login">
                  Login
                </Link>
              </li>
            )}
            <li>
            <button className='w-5 h-5 bg-white border-2 border-white rounded' onClick={handleThemeChange}>
  <FaSun/>
</button>

            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
