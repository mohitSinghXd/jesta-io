import  jwt from "jsonwebtoken"
 const generateaccesstoken = (_id)=>{ 
       const token = jwt.sign({id :_id} , process.env.Token , {expiresIn  : "7d"}) ; 
      return  token ; 
}  

export default generateaccesstoken ; 
 

