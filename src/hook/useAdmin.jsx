import React, { useContext } from 'react';
import { AuthContext } from '../Firebase/Provider';
import useAxiosSecure from './useAxiosSecure';
//import { useQuery } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
const useAdmin = () => {
    const {user}=useContext(AuthContext);
    const [axiosSecure]=useAxiosSecure();
    const {data: isAdmin ,isLoading: isAdminLoading}=useQuery({
        queryKey: ['isAdmin',user?.email],
        enabled:!!user?.email && !!localStorage.getItem("access-token"),
        queryFn:async()=>{
            const res =await axiosSecure.get(`/users/admin/${user?.email}`);
            console.log('is admin response',res);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading];

   // return [isAdmin, isAdminLoading]

};

export default useAdmin;