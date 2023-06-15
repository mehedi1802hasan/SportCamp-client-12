import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Firebase/Provider';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const MySelectedClasses = () => {
  const { user } = useContext(AuthContext);

  const { data: classes = [] ,refetch } = useQuery(
    ['mySelectedClasses', user.email],
    async () => {
      const res = await fetch(`https://sport-camp-server.vercel.app/myselectedclass/${user.email}`);
      const data = await res.json();
      const filteredClasses = data.filter((classItem) => classItem.studentEmail === user.email);
      return filteredClasses;
    }
  );
  const handleDelete = (cls) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://sport-camp-server.vercel.app/myselectedclass/${cls._id}`, {
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                'Deleted!',
                'The class has been deleted.',
                'success'
              );
            }
          })
          .catch((error) => {
            console.error('Error deleting class:', error);
            Swal.fire(
              'Error',
              'An error occurred while deleting the class.',
              'error'
            );
          });
      }
    });
  };
  
  return (
    <div>
      <div>
        <h3 className='my-5 font-semibold text-center text-red-700'>
          My Selected Classes: {classes.length}
        </h3>
        <div className='overflow-x-auto'>
          <table className='table w-full bg-yellow-500'>
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Class Name</th>
                <th>Instructor Name</th>
                <th>Available Seats</th>
                <th>Price</th>
                <th>Pay</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className='bg-green-500'>
              {classes.length > 0 &&
                classes.map((cls, i) => (
                  <tr key={cls._id}>
                    <th>{i + 1}</th>
                    <td>
                      <img className='w-20 h-20' src={cls.image} alt='' />
                    </td>
                    <td>{cls.className}</td>
                    <td>{cls.instructorName}</td>
                    <td>{cls.seat}</td>
                    <td>$ {cls.price} USD</td>
                    <td>
                      <Link to={`/dashboard/payment/${cls._id}`}>
                        <button className='btn btn-sm btn-outline'>Pay</button>
                      </Link>
                    </td>
                    <td>
                      <button onClick={()=>handleDelete(cls)} className='btn btn-sm btn-outline'>Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MySelectedClasses;
