import User from "../model/user.model.js";
import generateaccesstoken from "../utility/tokenGeneration.js";

export const signupmannual = async(req ,res)=>{
 try {
      const {username , email ,  password} = req.body ;  
      console.log(username  ,email , password);
      if(!username || !email || !password) return res.status(404).json({message : "all fields are required"}) ; 
    if(password.length < 6  )return res.status(401).json({message : "password must be atleast 6 characters"}) 
        const newUser = await User.create({username , email , password , authtype: "mannual"})  ; 
        const token = generateaccesstoken(newUser._id) ;   
        console.log(token);
        const options = {
            httpOnly : true   , 
            sameSite : "none" , 
            secure : true  , 
            maxAge : 7*24*60*60*1000
        }
        res.cookie("token"   , token  , options).status(201).json({message : "newuser created" , newUser: newUser})
 } catch (error) {
   return res.status(500).json({message :"something went wrong " , error : error.message})  
 }
} 


export const signupwithgoogle = (req  , res)=>{ 
    res.redirect(`https://accounts.google.com/o/oauth2/auth?client_id=${process.env.client_id}&redirect_uri=http://localhost:9000/api/auth/googlesignup/callback&response_type=code&scope=profile email`)

} 

export const handlecallback = async(req , res)=>{ 
    try {
         const code  = req.query.code ;  ;
         const response1 = await fetch("https://oauth2.googleapis.com/token" , {
            method : "POST" ,  
            headers :{
                "Content-Type" : "application/x-www-form-urlencoded"
            },
            body : new URLSearchParams({
                client_id  : process.env.client_id,
                client_secret : process.env.client_secret,
                code  : code , 
                grant_type : "authorization_code" , 
                redirect_uri:"http://localhost:9000/api/auth/googlesignup/callback"
            }) 
         })
           const actualtoken = await response1.json() ;  
const access_token = actualtoken.access_token ; 
           const response2 = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
            method :"GET" , 
            headers : {
                "Authorization" : `Bearer ${access_token}`
            }
           }) 

           const userinfo = await response2.json() ; 
           console.log(userinfo)  ;   
           const newuser = await  User.create({username :userinfo.given_name , email : userinfo.email  , googleId : userinfo.sub , authtype : "google" , picture : userinfo.picture}) ;  
           const token = generateaccesstoken(newuser._id) ; 
        res.cookie("token", token, {
    httpOnly: true,
    secure: false, 
    maxAge:7 * 24 *60 * 1000
})
           res.redirect("http://localhost:5173/mainpage")

    } catch (error) {
        console.log(error.message)
    }

}
