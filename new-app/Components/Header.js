"use client"
import React, { useContext } from 'react'
import Navbar from './Navbar'
import { myContext } from '@/Helper/Context';

const Header = (props) => {
  const user = useContext(myContext);
  return (
    <>
    <div className='bg-green-200 p-5'>
    {user}
    </div>
    </>
  )
}

export default Header