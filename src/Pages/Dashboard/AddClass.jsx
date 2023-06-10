import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Firebase/Provider';
const AddClass = () => {
    const { user } = useContext(AuthContext)
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const className = form.className.value;
        const image = form.image.value;
        const instructorName = form.instructorName.value;
        const instructorEmail = form.instructorEmail.value;
        const seat = form.seat.value;
        const price = form.price.value;
        const status =form.status.value;
        const addClass = { className, image, instructorName, instructorEmail, seat, price ,status};
        console.log(addClass)
        fetch('http://localhost:5000/classes',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addClass)
        })
        .then(result=>{
            alert('added successfully')
        })
        .catch(error=>{
            alert('sorry')
        })
        
    }
    return (
        <div className='w-full '>
            <h3 className='w-4/5 text-2xl font-bold text-center text-teal-600'>ADD Class</h3>
            <form onSubmit={handleSubmit} className='mx-10' >

                <div className='gap-5 md:flex'>
                    <div className="w-96 form-control">
                        <label className="label">
                            <span className="text-teal-500 label-text">Class Name*</span>

                        </label>
                        <input type="text" name='className' placeholder="Type your class name" className="w-full input input-bordered"
                            required />

                    </div>
                    <div className="w-96 form-control">
                        <label className="label">
                            <span className="text-teal-500 label-text">Image URL*</span>

                        </label>
                        <input type="text" name='image' placeholder="Type the class image url" className="w-full input input-bordered"
                            required />

                    </div>
                </div>

                <div className='gap-5 md:flex'>
                    <div>
                        <div className="w-96 form-control">
                            <label className="label">
                                <span className="text-teal-500 label-text">Instructor Name*</span>

                            </label>
                            <input type="text" name='instructorName' placeholder="enter the instructor name" className="w-full input input-bordered"
                                defaultValue={user?.displayName}required />

                        </div>
                    </div>

                    <div className="w-96 form-control">
                        <label className="label">
                            <span className="text-teal-500 label-text">Instructor Email*</span>

                        </label>
                        <input type="email" name='instructorEmail' placeholder="enter the instructor email" className="w-full input input-bordered"
                            defaultValue={user?.email} required/>

                    </div>
                </div>
                <div className='gap-5 md:flex'>
                    <div>
                        <div className="w-96 form-control">
                            <label className="label">
                                <span className="text-teal-500 label-text">Available seat*</span>

                            </label>
                            <input type="number" name='seat' placeholder="enter the seat number" className="w-full input input-bordered"
                           required />

                        </div>
                    </div>

                    <div className="w-96 form-control">
                        <label className="label">
                            <span className="text-teal-500 label-text">Price*</span>

                        </label>
                        <input type="number" name='price' placeholder="enter the price" className="w-full input input-bordered"
                       required />

                    </div>
                </div>
                
             
  <input className='hidden' type="text" name="status" defaultValue="pending" />


                <input type="submit" value='Add Item' className='mt-5 bg-teal-500 btn btn-sm' />
            </form>
        </div>
    );
};

export default AddClass;