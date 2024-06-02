import React from 'react'
import logo from '../assets/personal-report-logo.png'
import { Checkbox } from 'flowbite-react';
import Navbar from '../Components/Navbar';
import MyFooter from '../Components/MyFooter';

const Signup = () => {
  return (
    <div>
    <Navbar/>
    <div className='signup-form'>
        <div className='signup-form-left-part'>
            <form >
            {/* <label>UserName/Email: */}
            <input 
                placeholder='Username/Email'
                type="email" 
                name="username"
            />
            {/* </label> */}
            {/* <label>Password: */}
                <input 
                placeholder='Password'
                type="password" 
                name="Password" 
                />
                {/* </label> */}
            </form>
            <div className='signup-form-left-part-under-form'>
            <span1><Checkbox/>Remember Password</span1>
            <span2>Forgot Password?</span2>
            </div>
            <submit type="submit">LOGIN</submit>
            <div className='signup-form-left-part-bottom-part'>
            New User? <span>Create an Account</span>
            </div>
        </div>
        <div className='signup-form-right-part'>
            <img src={logo} alt='signup-logo'/>

        </div>

    </div>
    <MyFooter/>
    </div>
  )
}

export default Signup