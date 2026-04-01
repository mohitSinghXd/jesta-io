
import User from "../model/user.model.js";
const imagegenerate = async (req , res)=>{  
 const User_id = req.UserID  ;  
 if(!User_id) return res.status(400).json({message  : "no userid found here in imagegeneratioon"}) ; 
const prompt = req.body.prompt;
  const finduser = await User.findById(User_id) ; 
 finduser.prompt.push(prompt);
   await finduser.save()
    console.log(prompt);
    try {
         const response = await fetch(
"https://router.huggingface.co/hf-inference/models/stabilityai/stable-diffusion-xl-base-1.0" , {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.HF_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      inputs: prompt
    }),
  }
); 
 const arrayBuffer = await response.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString("base64");

   
    res.json({ image : base64});
    } catch (error) {
            console.log(error);
    res.status(500).json({ error: "Image generation failed" });
        
    }
 }  
 export default imagegenerate ; 