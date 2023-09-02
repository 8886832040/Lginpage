 import React, { useState } from 'react'
 import './LoginSignup.css'
 
const LoginSignup = () => {

    const [action,setAction] = useState("Login");
    
   return (
    <div className='container'>
     <div className='header'>
      <div className='text'>{action}</div>
      
     </div>
     <div className='inputs'>
        {action==="Login"?<div></div>:<div className='input'>
        <input type='text' placeholder='Enter your Name'/>
      </div> }
      
      <div className='input'>
        <input type='Email' placeholder='Email ID'/>
      </div>
      
      {action==="Login"? <div className='input'> <input type='Password'  placeholder='Enter your Password'/></div>
      :<div className='input'><input type='Password'  placeholder='Create Password'/></div>}
      
     </div>
     {action==="Sign Up"?<div></div>:<div className='forget-password'>Forget Password? <span>click here!</span></div>}
     
     {action==="Login"?<div></div>:<div className='forget-password'>Have a Account?<span>SignIn</span></div>}
     <div className='submit-container'>
        <div className={action==="Login"?"submit gray ":"submit"} onClick={()=> {setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=> {setAction("Login")}}>Login</div>
     </div>
    </div>
   )
 }
 export default  LoginSignup 
 