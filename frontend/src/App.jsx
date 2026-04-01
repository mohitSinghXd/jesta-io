import Signup from "./page/signup";  
import Mainpage from "./page/mainpage";
import {Routes , Route } from "react-router-dom" ; 
import { useContext, useEffect } from "react";
import { Usercontext } from "./context/context";
function App(){ 
const {user ,setuser , getuser}  = useContext(Usercontext) ;  

 useEffect(()=>{
  getuser()
 } , [])

  return(
    <>  
    
    <Routes>
      <Route path="/" element={ !user ? <Signup/> :<Mainpage/>}></Route> 
      <Route path="/mainpage" element={<Mainpage/>}></Route>
    </Routes>
     
    </>
  )
} 
export default App  ; 