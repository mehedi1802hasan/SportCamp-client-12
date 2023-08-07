import React, { useEffect, useState } from 'react';

const Instructors = () => {
    const [instructors,setInstructors]=useState([])
    useEffect(()=>{
        fetch('https://sport-camp-server.vercel.app/users/instructors')
  .then(response => response.json())
  .then(data=>{
    console.log(data)
    setInstructors(data)
  })
    },[])
    return (
        <div >
           
            <div className='w-8/12 mx-auto mb-9'>
      <h3 className='my-5 font-semibold text-center text-red-700 '> Total Instructors:  {instructors.length}</h3>
      <div className='overflow-x-auto'>
        <table className='table w-full bg-slate-300'>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
            
            </tr>
          </thead>
          <tbody className='bg-slate-200  '>
            {instructors.length > 0 &&
              instructors.map((instructor, i) => (
                <tr key={instructor._id}>
                  <th>{i + 1}</th>
                  <td> <img className='w-20 h-20' src={instructor.image}  alt="" /> </td>
                  <td>{instructor.name}</td>
                  <td>{instructor.email}</td>
                  
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
        </div>
    );
};

export default Instructors;