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
      <div className='grid grid-cols-1 gap-6 mx-auto font-bold text-teal-900 md:grid-cols-2 lg:grid-cols-2 m-7 w-96'>
      {
        popularInstracturs.slice(0, 6).map(instructor=><div>
<div className="shadow-xl card card-compact w-96 bg-base-100">
  <figure><img className="w-48 h-48 rounded-xl" src={instructor.image} alt="Shoes" /></figure>
  <div className="items-center text-center card-body">
    <h2 className=" card-title">{instructor.name}</h2>
    <p>{instructor.email}</p>

  </div>
</div>

        </div>)
      }
    </div>
  </div>
  );
};

export default PopularInstracturs;