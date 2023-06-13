import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../Firebase/Provider';

const ManageClasses = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/classes/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, [user.email]);

  const handleApproved = (id) => {
    fetch(`http://localhost:5000/classes/approved/${id}`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Class approved:', data);
        // Refresh the classes list after updating the status
        fetch(`http://localhost:5000/classes/${user.email}`)
          .then((res) => res.json())
          .then((data) => {
            setClasses(data);
          });
      })
      .catch((error) => {
        console.error('Error approving class:', error);
      });
  };

  const handleDenied = (id) => {
    fetch(`http://localhost:5000/classes/denied/${id}`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Class denied:', data);
        // Refresh the classes list after updating the status
        fetch(`http://localhost:5000/classes/${user.email}`)
          .then((res) => res.json())
          .then((data) => {
            setClasses(data);
          });
      })
      .catch((error) => {
        console.error('Error review:', error);
      });
  };
  const handleReview = (id) => {
    fetch(`http://localhost:5000/classes/denied/${id}`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Class denied:', data);
        // Refresh the classes list after updating the status
        fetch(`http://localhost:5000/classes/${user.email}`)
          .then((res) => res.json())
          .then((data) => {
            setClasses(data);
          });
      })
      .catch((error) => {
        console.error('Error denying class:', error);
      });
  };

  return (
    <div>
      <div>
        <h3 className='my-5 font-semibold text-center text-red-700'>
          Total Classes: {classes.length}
        </h3>
        <div className='overflow-x-auto'>
          <table className='table w-full bg-yellow-500'>
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Class Name</th>
                <th>Instructor Name</th>
                <th>Instructor Email</th>
                <th>Available Seat</th>
                <th>Status</th>
                <th>Feedback</th>
              </tr>
            </thead>
            <tbody className='bg-[#e5e5e5]'>
              {classes.length > 0 &&
                classes.map((cls, i) => (
                  <tr key={cls._id}>
                    <th>{i + 1}</th>
                    <td>
                      <img className='w-20 h-20' src={cls.image} alt='' />
                    </td>
                    <td>{cls.className}</td>
                    <td>{cls.instructorName}</td>
                    <td>{cls.instructorEmail}</td>
                    <td>{cls.seat}</td>
                    <td className='gap-5 '>
                      {cls.status === 'approved' ? (
                        <span className='text-green-500 r '>Approved</span>
                      ) : cls.status === 'denied' ? (
                        <span className='text-red-500'>Denied</span>
                      ) : (
                        <>
                          <button
                            onClick={() => handleApproved(cls._id)}
                            className='btn btn-sm btn-outline'
                          >
                            Approved
                          </button>
                          <button
                            onClick={() => handleDenied(cls._id)}
                            className='btn btn-sm btn-outline'
                          >
                            Denied
                          </button>
                        </>
                      )}
                    </td>
                    <td>
                      <button  className='btn btn-sm btn-outline'>Review</button>
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

export default ManageClasses;
