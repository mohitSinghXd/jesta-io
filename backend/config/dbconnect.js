import mongoose from "mongoose"; 
const dbconnect = async()=>{ 
    try {
        await mongoose.connect(process.env.MONGODB_URL) ;  
        console.log("dbconnected ✅💀")
    } catch (error) {
        console.log(error.message) ;
        
    }

}
export default dbconnect  ; 