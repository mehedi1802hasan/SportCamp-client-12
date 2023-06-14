import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Firebase/Provider';
import { useContext } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
const Classes = () => {
  const navigate=useNavigate();
  const location=useLocation();
  const [classes, setClasses] = useState([]);
const {user}=useContext(AuthContext)
  useEffect(() => {
    fetch('http://localhost:5000/classes/:instructorEmail')
      .then((res) => res.json())
      .then((data) => {
        const filteredClasses = data.filter(
          (classItem) => classItem.status === 'approved'
        );

        const disabledClasses = JSON.parse(localStorage.getItem('disabledClasses')) || [];

        const updatedClasses = filteredClasses.map((classItem) => {
          if (disabledClasses.includes(classItem.className)) {
            return { ...classItem, disabled: true };
          } else {
            return classItem;
          }
        });

        setClasses(updatedClasses);
      });
  }, []);

  const handleSelect = (cls) => {
  if(!user){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'you should login first!',
     
    })
    navigate('/login', { state: { from: location } });

    }
    const selectedClass = {
        studentEmail:user.email,
      image: cls.image,
      className: cls.className,
      instructorName: cls.instructorName,
      price: cls.price,
      seat: cls.seat
    };

    fetch('http://localhost:5000/myselectedclass', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(selectedClass)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: 'GOOD!',
            text: 'Posted successfully!',
            icon: 'success',
            confirmButtonText: 'Okay'
          });

          setClasses((prevClasses) =>
            prevClasses.map((classItem) =>
              classItem.className === cls.className
                ? { ...classItem, disabled: true }
                : classItem
            )
          );

          const disabledClasses = JSON.parse(localStorage.getItem('disabledClasses')) || [];
          localStorage.setItem(
            'disabledClasses',
            JSON.stringify([...disabledClasses, cls.className])
          );
        }
      });
  };

  return (
    <div>
      <div>
        <h3 className="my-5 font-semibold text-center text-red-700">
          Total Classes: {classes.length}
        </h3>
        <div className="overflow-x-auto">
          <table className="table w-full bg-yellow-500">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Class-Name</th>
                <th>Instructor-Name</th>
                <th>Avail-Seat</th>
                <th>Price</th>
                <th>Add for Booking</th>
              </tr>
            </thead>
            <tbody className="bg-green-500">
              {classes.length > 0 &&
                classes.map((cls, i) => (
                  <tr key={cls._id}>
                    <th>{i + 1}</th>
                    <td>
                      <img className="w-20 h-20" src={cls.image} alt="" />
                    </td>
                    <td>{cls.className}</td>
                    <td>{cls.instructorName}</td>
                    <td>{cls.seat}</td>
                    <td>$ {cls.price} USD</td>
                    <td>
                      <button
                        onClick={() => handleSelect(cls)}
                        className="btn btn-sm btn-outline"
                        disabled={cls.disabled}
                      >
                        {cls.disabled ? 'Selected' : 'Select'}
                      </button>
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

export default Classes;
