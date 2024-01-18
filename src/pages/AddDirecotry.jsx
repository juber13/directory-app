import React, { useState } from 'react'

const AddDirecotry = () => {
    const [userData, setUserDate] = useState({ name: "", dob: "", aadharNumber: "", mobileNumber: "", age: "" });
   
    let name;
    const handleChange  = e => {
      name = e.target.name;
    //   if(userData.name !== "" && userData.dob !== "" && userData.aadharNumber && userData.mobileNumber)
      setUserDate({...userData , [name] : e.target.value})
      console.log(userData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='w-4/5 mt-10 m-auto flex  flex-col gap-4'>
            <div className='heading text-3xl'>Add Persone</div>
            <div>
                <form className='flex gap-4 flex-col' onSubmit={handleSubmit}>
                    <div>
                     <input value={userData.name} onChange={handleChange} name="name"  required className='outline-none border shadow-md w-full p-3' type="text" placeholder='Name' /></div>
                    <div>
                     <input value={userData.dob} onChange={handleChange}  name="dob" required className='outline-none border shadow-md w-full p-3' type="dob" placeholder='DOB' /></div>
                    <div>
                     <input value={userData.aadharNumber} onChange={handleChange}  name="aadharNumber" required className='outline-none border shadow-md w-full p-3' type="text" placeholder='Aadhar Number' />
                     </div>
                    <div>
                     <input value={userData.mobileNumber} onChange={handleChange}  name="mobileNumber" required className='outline-none border shadow-md w-full p-3' type="text" placeholder='Mobile Number' />
                    </div>
                    <div>
                     <input value={userData.age} onChange={handleChange}  name="age" required className='outline-none border shadow-md w-full p-3' type="text" placeholder='Age' /></div>
                    <button className='text-1xl border rounded-md shadow-md w-[100px] bg-green-400 p-3 hover:bg-green-700 hover:text-white'>ADD</button>
                </form>
            </div>
        </div>
    )
}

export default AddDirecotry