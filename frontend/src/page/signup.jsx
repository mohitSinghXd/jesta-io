
import { useContext, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { redirect, Route , Routes, useNavigate  } from "react-router-dom";
import { useState } from "react";
import { Usercontext } from "../context/context"
function Signup(){ 
  const navigate = useNavigate(); 
  const[info ,setinfo] = useState(false) ;   
  const[error ,seterror] = useState("") ; 
  const[loading , setloading] = useState(false)  ; 

const {username  , getuser, setusername , email , setemail, password ,setpassword } = useContext(Usercontext)
 

useEffect(()=>{
    getuser()
} , [])

  async function handlemannualsignup(){  
    if(!username || !email || !password){
        seterror("*all fields are required") 
        return ; 
    } ;  
    setloading(!loading)
    try { 
const response = await fetch("http://localhost:9000/api/auth/mannual"  , {
  method : "POST" , 
  credentials : "include", 
  headers:{
    "Content-Type" : "application/json" , 
          "ngrok-skip-browser-warning": "true"

  } ,   

  body : JSON.stringify({username , email , password})
})
 
const actualresponse = await response.json()  ;   


console.log(actualresponse); 
setloading(!loading) 
navigate("/mainpage")
      
    } catch (error) {  
      setloading(!loading) 
      navigate("/")
      console.log(error);
    }

  }
  const handlesignupwithgoogle=()=>{ 
     window.location.href="http://localhost:9000/api/auth/googlesignup"

  }

  return( 
    <> 
     {
!info ? <div className="h-screen w-full flex flex-col gap-6 justify-center items-center bg-gray-950"> 
    <h1 className="text-white text-4xl font-bold"><span className="text-blue-800">J</span>eera</h1>
      <div className="h-110 flex flex-col gap-3  w-76 md:w-80 border-2 text-gray-400 bg-gray-900 border-gray-800 shadow-xl px-5"> 
       <div className="flex flex-col  mt-7 gap-2">
        <label htmlFor="Username">Username</label>
       <input type="text" placeholder="e.g john" onChange={(e)=>setusername(e.target.value)} className="border-2 rounded-[9px] placeholder:text-gray-400 px-2 py-2" />
       </div> 

        <div className="flex flex-col  gap-2">
        <label htmlFor="Username">Email</label>
       <input type="text" placeholder="e.g xyz@gmail.com" onChange={(e)=>setemail(e.target.value)} className="border-2 rounded-[9px] placeholder:text-gray-400 px-2 py-2" />
       </div> 
 
  <button className="border-2 px mt-2 py-2 rounded-2xl bg-blue-500 text-black text-[18px] font-semibold" onClick={()=>setinfo(!info)}>Next</button>
    
<div className="text-center  text-[16px]"><h1>or you can </h1></div>
  <div onClick={()=>handlesignupwithgoogle()} className="flex gap-2 cursor-pointer border-2 py-2 rounded-2xl justify-center items-center">
    <h1>Continue with google</h1> 
   <FcGoogle className="h-7 w-6" />
  </div>
      </div> 
      
    </div>  :  <div className=" h-screen w-full flex  justify-center items-center bg-gray-950"> 
           <div className="h-50 w-90 px-3  border-gray-600 bg-gray-900 text-gray-400"> 

            <div className="flex flex-col gap-2 "> 
              <label htmlFor="pass">password</label>
              <input type="password" placeholder="password" id="pass" onChange={(e)=>setpassword(e.target.value)} className="border-2 placeholder:text-gray-400 px-2 py-2 rounded-[12px]"/>
              <button className="border-2 mt-4 py-2 rounded-[10px] bg-blue-500 text-black" onClick={()=>handlemannualsignup()}>{ loading ? "submitting" : "submit"}</button> 
              <h1 className="text-red-500 text-center">{error}</h1>
            </div>
           </div> 
           
    </div>

     }
     
     </>
  ) 
} 

export default Signup ; 