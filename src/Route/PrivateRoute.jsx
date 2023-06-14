import React, { useContext } from 'react';
import { AuthContext } from '../Firebase/Provider';
import { PacmanLoader } from 'react-spinners';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    console.log(location)
   
    if(loading){
        return(
            <div className="flex items-center justify-center h-screen">
        <PacmanLoader color="#4F46E5" size={45} />
      </div>
        )
    }
    if(user){
  return children
  
    }
  
       return <Navigate to='/login' state={{from: location}} replace/>

};

export default PrivateRoute;