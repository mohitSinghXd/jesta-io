import express from "express"; 
import authroutes from "./Routes/routes.js"; 
import cors from 'cors'
import dbconnect from "./config/dbconnect.js"; 
import dotenv from "dotenv" ;  
import cookieParser from "cookie-parser";
dotenv.config();
const app = express() ;  
app.use(cors({origin :"*",
     credentials: true})) 
app.use(express.json())

app.use(cookieParser())
app.get("" , (req , res)=>{
      console.log("hey this is " , req.method) ;
})    


app.use("/api/auth"  , authroutes) ;  
app.use("/api/getimage" , authroutes )

const port = process.env.PORT ||8000
app.listen(port , ()=>{ 

    console.log("server is runnnig at the port" , port)
    dbconnect() ;
})