import React, { useEffect, useState } from 'react'
import { getUserContext } from '../context/ContextComponent'


const Input = ({ id, userName, userDob, userAge, userPhone, userAadhar }) => {
    const [isSaved, setSaved] = useState(false);
    const { data } = getUserContext();
    const { setName, setAadhar, setAge, setDob, setPhone, setInputValues } = data;
    const { name, age, phone, dob, aadhar, inputsValues , setShow } = data;


    const addLocalStorage = (info) => {
        return localStorage.setItem('userInfo', JSON.stringify(info));
    }

    const saveData = () => {
        if (name === "" | age === "" || phone === "" || dob === "" || aadhar === "") {
            alert("Please filled out these fields");
            return;
        }
        else if (aadhar.length !== 12 || phone.length !== 10) {
            alert("Aadhar must be 12 digit Or phone Number should be 10 digit");
            return;

        } else {
            setInputValues([...inputsValues, { name, age ,phone, dob, aadhar }])
            addLocalStorage(inputsValues)
            alert('all value r persent');
            setSaved(true);
            setShow(false)
        }
    }

    return (
        <div className='container flex items-center justify-between'>
            <input onChange={(e) => setName(e.target.value)} className='border p-1' type="text" disabled={isSaved === true ? true : false} />
            <input onChange={(e) => setDob(e.target.value)} className='border p-1' type="date" disabled={isSaved === true ? true : false} />
            <input  onChange={(e) => setAadhar(e.target.value)} className='border p-1' type="text" disabled={isSaved === true ? true : false} />
            <input  onChange={(e) => setPhone(e.target.value)} className='border p-1' type="tel" disabled={isSaved === true ? true : false} />
            <input onChange={(e) => setAge(e.target.value)} className='border p-1' type="age" disabled={isSaved === true ? true : false} />
            <div className='flex gap-1'>
                <button className='border p-1 text-xs' onClick={saveData}>{isSaved === true ? "Saved" : "Save"}</button>
            </div>
        </div>
    )
}

export default Input