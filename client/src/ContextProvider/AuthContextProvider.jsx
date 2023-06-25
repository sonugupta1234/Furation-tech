import { createContext } from "react";
import {useState} from "react";



export const AuthContext=createContext()


export default function AuthContextProvider({children}){

    const [isAuth,setIsAuth]=useState(false)
    const [sum1,setSum1]=useState(0)

    const login=()=>{
        setIsAuth(true)
    }

    const logout=()=>{
      setIsAuth(false)
    }

    const handleSum=(val)=>{
      setSum1(val)
    }

   

    return(
      <AuthContext.Provider value={{login,isAuth,logout,sum1,handleSum}}>
        {children}
      </AuthContext.Provider>
    )
}