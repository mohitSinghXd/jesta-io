import expess from "express"; 
import { handlecallback, signupmannual, signupwithgoogle } from "../controller/authcontroller.js";
import imagegenerate from "../controller/imagegenerattion.js";
import isauth from "../utility/isauth.js";
import { getcurrentuser } from "../utility/getcurrentuser.js";

const authroutes = expess.Router() ;  

authroutes.get("/googlesignup" , signupwithgoogle) 
authroutes.post("/mannual" , signupmannual) ; 
authroutes.get("/googlesignup/callback" , handlecallback) ; 
authroutes.get("/getuser",  isauth,getcurrentuser)
authroutes.post("/generate-image"   ,isauth , imagegenerate) ;
export default authroutes ; 