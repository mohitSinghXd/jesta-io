import { BiUpArrowAlt } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from "axios"; 
import { GiHamburgerMenu } from "react-icons/gi";

import { FaRegUserCircle } from "react-icons/fa";
import { useContext, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Usercontext } from "../context/context";

function Mainpage() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
 const[sidebar , setsidebar] = useState(false)  ;    
 const{user , setuser ,getuser}  = useContext(Usercontext)

  const generateImage = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setImage("");

    try {
      const res = await axios.post(
        "http://localhost:9000/api/getimage/generate-image",
        { prompt }     , 
        {withCredentials: true}
      );
console.log(res.data);        // ✅ pura response dekho
console.log(res.data.image)
      setImage(`data:image/png;base64,${res.data.image}`);
    } catch (err) {
      console.log(err.message); 
    }

    setLoading(false);
  };

  return (
    <div className="h-screen  flex flex-col justify-center items-center bg-gradient-to-br from-gray-950 to-gray-900">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-10 max-w-full">
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Generate Images
        </span>
      </h1>

      {/* Image Box */}
      <div className="relative flex justify-center items-center rounded-2xl border border-gray-700 h-64 w-[70%] md:h-100 md:w-[600px] bg-gray-900 shadow-lg overflow-hidden">

        {/* Placeholder */}
        {!image && !loading && (
          <p className="text-gray-500 text-center px-4">
            Your generated image will appear here
          </p>
        )}

        {/* Loader */}
        {loading && (
          <AiOutlineLoading3Quarters className="text-blue-500 animate-spin text-5xl" />
        )}

        {/* Image */}
        {image && (
          <img
            src={image}
            alt="generated"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Input Box */}
      <div className="flex items-center mt-6 w-[70%] md:w-[600px] bg-gray-900 border border-gray-700 rounded-xl px-2  py-2 shadow-md">

        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your image..."
          className="flex-1 bg-transparent  text-gray-300 placeholder-gray-500 outline-none"
        />

        <button
          onClick={generateImage}
          className="bg-blue-500 hover:bg-blue-600 transition p-2 rounded-lg"
        >
          <BiUpArrowAlt className="text-white text-xl" />
        </button>
      </div> 

<div  className={`border-2 h-screen w-[190px] md:w-[250px] gap-4 flex flex-col items-center absolute left-0 px-3 bg-gray-900 transition-transform  duration-300 ${sidebar ? 'translate-x-0' : '-translate-x-full'}`}>  
  <FaArrowLeft onClick={() => setsidebar(false)} className="absolute text-gray-300 left-2 top-1"/>
  <div className="border-2 relative border-gray-500 h-12 w-12 mt-10 text-center rounded-[50%]">  
{
    user?.picture ? <img src={user.picture} alt=""  className="h-11 w-11 object-cover rounded-[50%] absolute "/> : <FaRegUserCircle  className="text-gray-400 h-11 w-11 "/>
}    </div> 
  <div className="h-8 w-full border-3 rounded-[12px] text-center text-gray-300 shadow-sm hover:scale-x-105  border-gray-600">{user?.username}</div>
  <div className="h-8 w-full overflow-hidden border-3 rounded-[12px] text-center text-gray-300 shadow-sm hover:scale-x-105  border-gray-600">{user?.email}</div>
  <div className="border-t border-gray-300 w-full"></div> 
</div>

{/* Hamburger - sidebar band ho toh dikhao */}
{!sidebar && (
  <GiHamburgerMenu className="text-white absolute top-2 left-2 h-7 w-7" onClick={() => setsidebar(true)}/>
)}
    </div>
  );
}

export default Mainpage;