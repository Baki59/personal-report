import React from 'react'
import logo from '../assets/personal-report-logo.png'
import { Checkbox } from 'flowbite-react';
import Navbar from '../Components/Navbar';
import MyFooter from '../Components/MyFooter';
import './signup.css'

const Signup = () => {
  return (
    <div>
    <Navbar/>
    <div className='signup-form'>
        <div className='signup-form-left-part'>
            <form >
            {/* <label>UserName/Email: */}
            <div className='signup-form-left-part-1st-row'>
                <input 
                    placeholder='First Name'
                    type="text" 
                    name="firstname"
                />
                <input 
                    placeholder='Last Name'
                    type="text" 
                    name="lastname"
                />

            </div>
            <input 
                placeholder='Email'
                type="email" 
                name="username"
            />
            <input 
                placeholder='Phone'
                type="number" 
                name="phone"
            />
            
            {/* </label> */}
            {/* <label>Password: */}
                <input 
                placeholder='Password'
                type="password" 
                name="Password" 
                />
                <input 
                placeholder='Confirm Password'
                type="password" 
                name="Password" 
                />
                {/* </label> */}
            </form>
            
            <submit type="submit">SIGN UP</submit>
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