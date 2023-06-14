import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../Firebase/Provider';

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [filteredUser, setFilteredUser] = useState(null);

  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch('http://localhost:5000/users');
    return res.json();
  });

  useEffect(() => {
    const foundUser = users.find((userData) => userData.email === user.email);
    setFilteredUser(foundUser);
  }, [users, user.email]);

  return (
    <div className=' text center'>
    
      {filteredUser && (
        <div>
          <p className='text-3xl font-bold text-center text-green-700 my-28'>... Welcome To '{filteredUser.role || 'Student'}' Dashboard...</p>
        </div>
      )}
    </div>
  );
};

export default DashboardHome;
