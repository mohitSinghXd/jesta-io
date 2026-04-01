import mongoose from "mongoose"; 
const userSchema = new mongoose.Schema({
    username :{
        type:String  , 
        required : true   , 
        trim : true  
    } ,  
    email : {
        type :String ,
        required: true 
    } , 
    password :{
        type :String ,
    }  , 
    googleId : {
        type :String , 
        
    } , 
    authtype  :{
        type : String ,  
        trim: true  , 
        enum:["mannual" , "google"]
    }  , 
    picture:{
 type :String 
    },
    prompt :[{ 
        type: String 
    }]
}) 

const User = mongoose.model("users" , userSchema)  ;  

export default User   ; 