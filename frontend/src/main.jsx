import { createRoot } from 'react-dom/client' 
import App  from './App'
import './index.css' 
import { WrapperContext } from './context/context' ; 
import { BrowserRouter } from 'react-router-dom';
createRoot(document.getElementById('root')).render(  
      <BrowserRouter>
 <WrapperContext>
    <App />
 
 </WrapperContext> 
 </BrowserRouter> 
   
 
)
