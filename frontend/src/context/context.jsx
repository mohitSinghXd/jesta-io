
import { useState } from "react";
import { createContext } from "react";

export const Usercontext  = createContext()  ; 
export const  WrapperContext = ({children})=>{   
    const[user , setuser] = useState("") ; 
      const [username , setusername] = useState("") ; 
  const[email ,setemail] = useState("") ;  
  const [password , setpassword]   =  useState("") ;  
  
  const getuser = async()=>{
    try {
        const response = await fetch("http://localhost:9000/api/auth/getuser" ,{
    method : "GET"  , 
     credentials : "include"
   })  

   const data  = await response.json() ;  
   setuser(data.user) ; 

   console.log(data)  
    } catch (error) {
     console.log(error)   
    }
 } 

    const value = { 
        username , setusername  ,getuser, email , setemail, password ,setpassword  , user , setuser


    }
 
    return(
        <Usercontext.Provider value= {value}>{children}</Usercontext.Provider>
    )
}