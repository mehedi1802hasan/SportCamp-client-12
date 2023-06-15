import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Firebase/Provider';

const MyClasses = () => {
    const { user } = useContext(AuthContext)
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch(`https://sport-camp-server.vercel.app/classes/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                const filteredClasses = data.filter(
                    (classItem) => classItem.instructorEmail === user.email
                );
                setClasses(filteredClasses);
             //   console.log(filteredClasses);

            });
    }, [user.email]);

    return (
        <div>

            <div>
                <h3 className='my-5 font-semibold text-center text-red-700 '> My Total Clasess:  {classes.length}</h3>
                <div className='overflow-x-auto'>
                    <table className='table w-full bg-yellow-500'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class-Name</th>
                                <th>Status</th>
                                <th>Review</th>
                            

                            </tr>
                        </thead>
                        <tbody className='bg-green-500'>
                            {classes.length > 0 &&
                                classes.map((cls, i) => (
                                    <tr key={cls._id}>
                                        <th>{i + 1}</th>
                                        <td>{cls.className}</td>
                                        <td>{cls.status}</td>
                                        
                                        <td>{cls?.review }</td>

                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyClasses;