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
           
            <div className=' mb-9'>
      <h3 className='my-5 font-semibold text-center text-red-700 '> Total Instructors:  {instructors.length}</h3>
     <div className='grid grid-cols-1 md:grid-cols-3  gap-4  w-full mx-auto'>
      {
        instructors.map(instructor=><div>
         <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={instructor.image} alt="Shoes" className="h-48 w-48 rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-serif">Name:<span className='text-pink-700 font-bold '> {instructor.name}</span></h2>
    <div className="card-actions">
      <h3 className=''><span className='font-serif text-black font-bold '>Email:</span> <span className='text-pink-700 font-bold '> {instructor.email}</span></h3>
      </div>
  </div>
</div>
        </div>)
      }
     </div>
    </div>
        </div>
    );
};

export default Instructors;