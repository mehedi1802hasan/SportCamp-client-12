import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Firebase/Provider';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const MySelectedClasses = () => {
    const { user } = useContext(AuthContext)
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myselectedclass/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                const filteredClasses = data.filter(
                    (classItem) => classItem.studentEmail === user.email
                );
                setClasses(filteredClasses);
                console.log(filteredClasses);

            });
    }, [user.email]);
    return (
        <div>
        <div>
            <h3 className='my-5 font-semibold text-center text-red-700 '>My selected Clasess:  {classes.length}</h3>
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
                            <th>Pay</th>
                            <th> Delete</th>
                        

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
                 {/**TODO Payment link */}       <td>  <Link to={`/dashboard/payment?price=${cls.price}`}>
  <button className="btn btn-sm btn-outline">Pay</button>
</Link>
</td>
                       <td ><button className="btn btn-sm btn-outline">Delete</button></td>

                                    
                                
                                    
                                   
                                    

                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    );
};

export default MySelectedClasses;