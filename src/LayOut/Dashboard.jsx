import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Navbar from '../Shared/Navbar';
import { AuthContext } from '../Firebase/Provider';
import useInstructor from '../hook/useInstructor';
import { Outlet } from 'react-router-dom';
import useAdmin from '../hook/useAdmin';
const Dashboard = () => {
  const [isInstructor] = useInstructor();
  const { user } = useContext(AuthContext);
const [isAdmin]=useAdmin()
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
            {/* {isInstructor ? (
              <>
                <li>
                  <Link to="manageuser">Manage User</Link>
                </li>
                <li>
                  <Link to="manageclasses">Manage Classes</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="myselectedclasses">My Selected Classes</Link>
                </li>
                <li>
                  <Link to="myenrolledclasses">My Enrolled Classes</Link>
                </li>
              </>
            )} */}
            {
              isAdmin &&
              <>
                <li>
                  <Link to="manageuser">Manage User</Link>
                </li>
                <li>
                  <Link to="manageclasses">Manage Classes</Link>
                </li>
              </>
              || 
              isInstructor &&
              <>
                <li>
                  <Link to="addclass">Add Class</Link>
                </li>
                <li>
                  <Link to="myclasses">My Classes</Link>
                </li>
              </>
              ||
              <>
                <li>
                  <Link to="myselectedclasses">My Selected Classes</Link>
                </li>
                <li>
                  <Link to="myenrolledclasses">My Enrolled Classes</Link>
                </li>
                <li>
                  <Link to="paymentshistory">My Payments-History</Link>
                </li>
              </>
            }
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
