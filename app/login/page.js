"use client"
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../custom.css"
import LoginForm from '../components/LoginForm';


function login() {
  return (
    <>
    <div className='animatedStoreIcon bg-store-light'>
    <div className='pt-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
    <img width="144" height="144" src="https://img.icons8.com/color/144/online-store.png" alt="online-store"/>
    </div>
    </div>
    <LoginForm/>
    </>
  )
}

export default login