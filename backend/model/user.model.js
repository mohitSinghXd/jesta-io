import mongoose from "mongoose";  
import bcrypt from "bcrypt"
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
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = bcrypt.hash(this.password, 10);
    next();
});

const User = mongoose.model("users" , userSchema)  ;  

export default User   ; 