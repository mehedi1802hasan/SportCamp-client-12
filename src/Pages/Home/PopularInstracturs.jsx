import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
const PopularInstracturs = () => {
  const [popularInstracturs,setPopularInstracturs]=useState([]);
  useEffect(()=>{
      fetch('http://localhost:5000/users/instructors')
      .then(res=>res.json())
      .then(data=>{
          console.log(data)
          setPopularInstracturs(data)
      })
  },[])
  return (
  <div>
    <h3 className='mt-16 font-serif text-2xl font-bold text-center text-teal-700'><span className='text-red-500'>P</span>o<span className='text-red-500'>P</span>ular <span className='text-red-500'>I</span>ns<span className='text-red-500'>T</span>ruc<span className='text-red-500'>T</span>ors</h3>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3 m-7'>
      {
        popularInstracturs.slice(0, 6).map(instructor=><div>
<div className="shadow-xl card card-compact w-96 bg-base-100">
  <figure><img className="w-48 h-48 rounded-xl" src={instructor.image} alt="Shoes" /></figure>
  <div className="items-center text-center card-body">
    <h2 className=" card-title">Name:{instructor.name}</h2>
    <p>Email: {instructor.email}</p>

  </div>
</div>

        </div>)
      }
    </div>
  </div>
  );
};

export default PopularInstracturs;