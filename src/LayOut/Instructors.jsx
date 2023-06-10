import React, { useEffect, useState } from 'react';

const Instructors = () => {
    const [instructors,setInstructors]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/users/instructors')
  .then(response => response.json())
  .then(data=>{
    console.log(data)
  })
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Instructors;