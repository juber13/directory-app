import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { userContext } from '../context/ContextComponent';
import { getUserContext } from '../context/ContextComponent';

const Header = () => {
    const data = getUserContext();
    return (
        <div className='bg-gray-300 p-3 flex justify-between items-center'>
            <div className='text-1xl'>
                <Link to="/">Directory App</Link>
            </div>
            <div className='flex gap-3'>
                <button>
                    <Link to="dashboard">DashBoad</Link>
                </button>
                <button className='border rounded-md p-2 bg-white'>
                    <Link to="/login">Login</Link>
                </button>
            </div>
        </div>
    )
}

export default Header