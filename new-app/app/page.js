"use client"
import Header from '@/Components/Header'
import React, { useState, useContext } from 'react'
import { myContext } from '@/Helper/Context';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  const user = useContext(myContext);
  const notify =()=>{
    toast.success('completly donw!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  return (
    <>
    {user}
      
    <Header  />

    <button className='btn' onClick={notify}>Login</button>
    <ToastContainer/>

    </>
    )
}

export default page