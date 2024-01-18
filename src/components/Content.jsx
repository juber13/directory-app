import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Input from './Input';
import { getUserContext } from '../context/context'


const Content = () => {
  const {data} = getUserContext();
   
   const {name , age , phone  ,dob , aadhar ,inputsValues , setInputValues} = data;

   const addInputs = () => {
    setInputValues([...inputsValues , {id :inputsValues.length + 1,  name , age , phone  ,dob , aadhar}]);
   }


//    useEffect(() => {},[inputsValues]);


    return (
        <div className='content my-4 p-3 '>
           <div className="heading flex gap-4">
            <button className='rounded-md bg-white-400 shadow-lg border p-2 text-black font-bold text-sm'><Link to="add-details">Add New Persone
            </Link></button>
            <button className='rounded-md bg-white-400 shadow-lg border p-2 text-black font-bold text-sm'>Retrieve Information</button>
           </div>
            <div className='headings flex justify-between pt-4'>
                <div>Name</div>
                <div>DOB</div>
                <div>Aadhar</div>
                <div>Phone</div>
                <div>Age</div>
                <div>Actions</div>
            </div>
           <div className='body h-[600px] relative flex flex-col gap-5 pt-3'>
            {inputsValues.map((item , index) => {
               return <Input id={item.id} key={index}   userName={item.name} userDob={item.dob} UserAadhar={item.aadhar} userPhone={item.phone} userAge={item.age}/>
            })}

           </div>

           <div className="footer absolute bottom-10 right-12">
              <button onClick={addInputs} className='text-2xl border p-3 rounded-md bg-green-400'>+</button>
           </div>
        </div>
    )
}

export default Content