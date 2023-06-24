import React from 'react'
import {Routes,Route} from "react-router-dom"
import { HomePage } from '../Pages/HomePage'
import { SignUp } from '../Pages/SignUp'
import { Checkout } from '../Pages/Checkout'
import { Login } from '../Pages/Login'




const AllRoutes = () => {
  return (
    <>
     
    <Routes>
     <Route path="/" element={<HomePage/>} />
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<SignUp />} />
       <Route path="/checkout" element={<Checkout />} />
       

      
    </Routes>
    </>
  )
}

export default AllRoutes;


// <div>AllRoutes
// </div>