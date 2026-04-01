import User from "../model/user.model.js";

export const getcurrentuser =async (req ,res)=>{ 
     try { 
        const userId = req.UserID ;  
        if(!userId) return res.status(400).json({message : "something went wrong in finding the id"}) ; 
const finduser = await User.findById(userId).select("-password -googleId");
        return res.status(200).json({user  : finduser})  
     } catch (error) { 

        res.status(500).json({message:"something went wrong in getcurrentuserfunction"  , error : error.message})
        
     }
}