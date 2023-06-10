import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Firebase/Provider';
import { useState } from 'react';
import { useEffect } from 'react';
const ManageClasess = () => {
    const { user } = useContext(AuthContext)
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/classes/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
               setClasses(data)

            });
    }, [user.email]);
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
                             <th>Instructor-Email</th>
                             <th>Avail-Seat</th>
                            <th>Status</th>
                            <th>FeedBack</th>
                        

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
                                    <td>{cls.instructorEmail}</td>
                                    <td>{cls.seat}</td>
                                    <td className='flex flex-col gap-5'>
  <button className="btn btn-sm btn-outline">Approved</button>
  <button className="btn btn-sm btn-outline">Denied</button>
</td>

                                    <td><button className="btn btn-sm btn-outline">Review</button></td>
                                
                                    
                                   
                                    

                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    );
};

export default ManageClasess;