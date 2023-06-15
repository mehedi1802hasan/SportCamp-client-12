import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Firebase/Provider';

const PaymentsHistory = () => {
    const { user } = useContext(AuthContext)
    const [MyEnrolled, setMyEnrolled] = useState([])
    useEffect(() => {
        fetch('https://sport-camp-server.vercel.app/payments')
            .then(res => res.json())
            .then((data) => {
                const filteredClasses = data.filter(
                    (classItem) => classItem.email === user.email
                );
                setMyEnrolled(filteredClasses);
                console.log(filteredClasses);

            });
    }, [user.email])
    return (
        <div>
            <div>
                <div>
                    <h3 className='my-5 font-semibold text-center text-red-700 '>My Enrolled Clasess:  {MyEnrolled.length}</h3>
                    <div className='overflow-x-auto'>
                        <table className='table w-full bg-yellow-500'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Class-Name</th>
                                    <th>TransictionID</th>
                                    <th>Price</th>
                                    <th>Date</th>



                                </tr>
                            </thead>
                            <tbody className='bg-green-500'>
                                {MyEnrolled.length > 0 &&
                                    MyEnrolled.map((cls, i) => (
                                        <tr key={cls._id}>
                                            <th>{i + 1}</th>
                                            <td><img className='w-20 h-20' src={cls.image} alt="" /></td>
                                            <td>{cls.className}</td>
                                            <td>{cls.transactionId}</td>
                                            <td>$ {cls.price} USD</td>
                                            <td> {cls.date} </td>

                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>        </div>
    );
};

export default PaymentsHistory;