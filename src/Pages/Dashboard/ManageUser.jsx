import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';

const ManageUser = () => {
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch('http://localhost:5000/users');
    return res.json();
  });

  const handleAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            title: 'SUCCESS!',
            text: `${user.name} is now an Admin`,
            icon: 'success',
            confirmButtonText: 'Okay',
          });
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  const handleInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
        method: 'PATCH',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            refetch();
            Swal.fire({
              title: 'SUCCESS!',
              text: `${user.name} is now an Admin`,
              icon: 'success',
              confirmButtonText: 'Okay',
            });
          }
        })
        .catch((error) => {
          console.log('Error:', error);
        });
  };

  const handleDelete = (user) => {
    // Add logic to handle the delete button click here
  };

  return (
    <div>
      <h3 className='my-5 font-semibold text-center text-red-700'> Total Users: {users.length}</h3>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 &&
              users.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === 'admin' ? (
                      'admin'
                    ) : (
                      <div>
                        <button onClick={() => handleAdmin(user)} className='btn btn-ghost btn-lg'>
                          Admin
                        </button>
                        <button onClick={() => handleInstructor(user)} className='btn btn-ghost btn-lg'>
                          Instructor
                        </button>
                      </div>
                    )}
                  </td>
                  <td>
                    <button onClick={() => handleDelete(user)} className='btn btn-ghost btn-lg'>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
