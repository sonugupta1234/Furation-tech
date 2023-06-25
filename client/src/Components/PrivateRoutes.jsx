import React, { useContext } from 'react'
import { AuthContext } from '../ContextProvider/AuthContextProvider'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoutes = ({children}) => {

    const {isAuth}=useContext(AuthContext)
    

      if(!isAuth){
        return <Navigate to="/login" />
      }else
        return children
      
       

  
}
