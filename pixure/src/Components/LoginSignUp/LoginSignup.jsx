import React, { useState } from 'react'
import './LoginSignup.css'

const LoginSignup = () => {

  const [action,setAction] = useState("Sign Up");

  return (
    <div className = 'container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {
            action==="Login"?<div></div>: 
            <div className="input">
                <input type="text" placeholder='First Name'/>
            </div>
            
            }
            {
            action==="Login"?<div></div>: 
            <div className="input">
                <input type="text" placeholder='Last Name'/>
            </div>
            
            }
             {
            action==="Login"?<div></div>: 
            <div className="input">
                <input type="text" placeholder='Username'/>
            </div>
            
            }
            <div className="input">
                <input type="email" placeholder='Email'/>
            </div>
            <div className="input">
                <input type="password" placeholder='Password'/>
            </div>
            {
            action==="Login"?<div></div>: 
            <div className="input">
                <input type="number" placeholder='Zip Code'/>
            </div>
            
            }
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot_password">Lost Password? <span>Click Here</span></div>}
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignup

