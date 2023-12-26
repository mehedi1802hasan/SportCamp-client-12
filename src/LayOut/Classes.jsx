import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Firebase/Provider';
import { useContext } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import useInstructor from '../hook/useInstructor';
import useAdmin from '../hook/useAdmin';
import Tilt from 'react-parallax-tilt';
const Classes = () => {
  const [isInstructor] = useInstructor();
  const [isAdmin]=useAdmin()

  const navigate=useNavigate();
  const location=useLocation();
  const [classes, setClasses] = useState([]);
const {user}=useContext(AuthContext)
  useEffect(() => {
    fetch('https://sport-camp-server.vercel.app/classes/:instructorEmail')
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

    fetch('https://sport-camp-server.vercel.app/myselectedclass', {
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
    <div className='md:mx-10 my-5'>
      <div>
        <h3 className="my-5 font-semibold text-center text-red-700 text-xl">
          Total Classes:  {classes.length}
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 w-full mx-auto'>
        {
          classes.map(cls=>
            <div className="card w-96 md:h-full bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={cls.image} alt="Shoes" className="rounded-xl  w-60 h-60 " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold font-serif">{cls.className}</h2>
    <p className='font-semibold font-serif text-rose-700'>Instructor: {cls.instructorName}</p>
    <div className='flex gap-4 '>
      <p>seat: <span  className='font-mono'>{cls.seat}</span></p>
      <p>price: <span className='font-mono'>{cls.price}</span></p>
    </div>
    <div className="card-actions">

    <button
                        onClick={() => handleSelect(cls)}
                        className="btn btn-sm btn-outline hover:skew-y-12 border-2 border-rose-600 hover:bg-pink-500"
                        disabled={cls.disabled || isAdmin || isInstructor}
                    //   disabled={cls.role === 'admin' || cls.role === 'instructo'}
                      >
                        Select
                      </button>    </div>
  </div>
</div>
          )
        }
        </div>
      </div>
    </div>
  );
};

export default Classes;
