import React, { useContext } from 'react';
import { AuthContext } from '../Firebase/Provider';
import useAxiosSecure from './useAxiosSecure';
//import { useQuery } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
const useInstructor = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
  
    const queryFn = async () => {
      if (!user || !user.email) {
        return false;
      }
  
      try {
        const res = await axiosSecure.get(`/users/instructor/${user.email}`);
        console.log('is instructor response', res);
        return res.data.instructor ?? false;
      } catch (error) {
        console.error('Error fetching instructor data:', error);
        return false;
      }
    };
  
    const { data: isInstructor = false, isLoading: isInstructorLoading } = useQuery(['isInstructor', user?.email], queryFn, {
      enabled: !!user?.email && !!localStorage.getItem('access-token'),
    });
  
    return [isInstructor, isInstructorLoading];
  };
  
  export default useInstructor;
  
  
  