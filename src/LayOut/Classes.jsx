import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
//import { useContext } from 'react';
//import { AuthContext } from '../Firebase/Provider';
const Classes = () => {
  

   // const { user } = useContext(AuthContext)
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/classes/:instructorEmail')
            .then((res) => res.json())
            .then((data) => {
                const filteredClasses = data.filter(
                    (classItem) => classItem.status === 'approved'
                );
                setClasses(filteredClasses);
                console.log(filteredClasses);

            });
    }, []);
    const handleSelect =(cls)=>{
        const selectedClass={image:cls.image ,className:cls.className , instructorName:cls.instructorName ,price:cls.price}
        console.log(selectedClass)
        fetch('http://localhost:5000/myselectedclass',{
          method:"POST",
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(selectedClass)
        })
        .then(res=>res.json())
        .then(data =>{
          if(data.insertedId){
            Swal.fire({
              title: 'GOOD!',
              text: 'posted successfully !!',
              icon: 'success',
              confirmButtonText: 'Okay'
            })
        }
    })
   
    }
    return (
        <div>
        <div>
        <h3 className='my-5 font-semibold text-center text-red-700 '>Total Clasess:  {classes.length}</h3>
        <div className='overflow-x-auto'>
            <table className='table w-full bg-yellow-500'>
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
                <tbody className='bg-green-500'>
                    {classes.length > 0 &&
                        classes.map((cls, i) => (
                            <tr key={cls._id}>
                                <th>{i + 1}</th>
                                <td><img className='w-20 h-20' src={cls.image} alt="" /></td>
                                <td>{cls.className}</td>
                                <td>{cls.instructorName}</td>
                                <td>{cls.seat}</td>
                                <td>$ {cls.price} USD</td>
                                <td ><button onClick={() => handleSelect(cls)} className="btn btn-sm btn-outline">Select</button>
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