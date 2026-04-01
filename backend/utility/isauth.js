import jwt from "jsonwebtoken"
const isauth=(req ,res , next)=>{
     try {
         const token = req.cookies.token ;  
         if(!token) return res.status(402).json({message :"token not found"}) ; 
         const decoded = jwt.verify(token ,process.env.Token )  
         if(!decoded) return  res.status(400).json({message :"invalid token"})  ;

         req.UserID = decoded.id ; 
         next() ; 
     } catch (error) { 
        res.status(500).json({message  : "isautherror"   , error : error.message})
        
     }
} 

export default isauth ; 