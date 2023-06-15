import React, { useEffect, useState } from 'react';

const PopularClasses = () => {
    const [popularClass,setPopularClass]=useState([]);
    useEffect(()=>{
        fetch('https://sport-camp-server.vercel.app/payments')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setPopularClass(data)
        })
    },[])
    return (
       <div>
        <h3 className='mt-10 font-serif text-2xl font-bold text-center text-red-700'>Popular Classes </h3>
         <div className='grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3 m-7'>
           {
            popularClass.slice(0, 6).map(cls=><div >
             
 <div className="w-full shadow-xl card bg-slate-300 ">
  <figure className="px-10 pt-10">
    <img src={cls.image} alt="class" className="w-48 h-48 rounded-xl" />
  </figure>
  <div className="items-center text-center card-body">
    <h2 className="card-title"> {cls.className}</h2>
    <p className='text-green-900'> ClassId:{cls.classId}</p>
    <p>Price: $ {cls.price}USD</p>
    <p>Seat: {cls.seat}</p>
  </div>
</div>

            </div>)
           }
        </div>
       </div>
    );
};

export default PopularClasses;