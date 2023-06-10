import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
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
    const handleSelect =()=>{
        console.log('handleseleceddd...')
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
                                <td ><button onClick={handleSelect } className="btn btn-sm btn-outline">Select</button></td>

                            
                                
                               
                                

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