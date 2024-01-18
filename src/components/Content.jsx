import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Input from './Input';
import { getUserContext } from '../context/ContextComponent'


const Content = () => {
    const { data } = getUserContext();

    const { name, age, phone, dob, aadhar, inputsValues, setInputValues , setShow , show } = data;

    const showInputs = () => {
        setShow(true);
    }

    const handelDelete = (id) => {
        const newData = inputsValues.filter(input => input.id !== id);
        setInputValues(newData);
    }


    return (
        <div className='content my-4 p-3 '>
            <div className="heading flex gap-4">
                <button className='rounded-md bg-white-400 shadow-lg border p-2 text-black font-bold text-sm'><Link to="add-details">Add New Persone
                </Link></button>
                <button className='rounded-md bg-white-400 shadow-lg border p-2 text-black font-bold text-sm'><Link to="/retrieve">Retrieve Information</Link></button>
            </div>
            <div className='headings flex justify-between pt-4'>
                <div>Name</div>
                <div>DOB</div>
                <div>Aadhar</div>
                <div>Phone</div>
                <div>Age</div>
                <div>Actions</div>
            </div>

            <div className='headings justify-between pt-4'>
            {inputsValues.map((item) => {

                return (
                    <div className='flex justify-between gap-10'>
                        <div>{item.name}e</div>
                        <div>{item.dob}</div>
                        <div>{item.aadhar}</div>
                        <div>{item.phone}</div>
                        <div>{item.age}</div>
                        <div><button className='border p-1' onClick={() => handelDelete(item.id)}>Delete</button></div>
                    </div>
                )

             })}
            </div>
            <div className='body h-[600px] relative flex flex-col gap-5 pt-3'>
                {show === true ?  <Input /> : ""}
            </div>

            <div className="footer absolute bottom-10 right-12">
                <button onClick={showInputs} className='text-2xl border p-3 rounded-md bg-green-400'>+</button>
            </div>
        </div>
    )
}

export default Content