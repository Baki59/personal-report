import React from 'react'
import Navbar from '../Components/Navbar'
import MyFooter from '../Components/MyFooter'
import login_page_ayat from '../assets/login_page_ayat.png';
import login_page_ayat_meaning from '../assets/login_page_ayat_meaning.png'
import './home.css';
import logo from '../assets/personal-report-logo.png'
import { Checkbox } from 'flowbite-react';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className='home-middle'>
          <div className='home-middle-quranic-verse'>
              <img src={login_page_ayat} className='login_page_ayat'/>
              <img src={login_page_ayat_meaning} className='login_page_ayat_meaning'/>
          </div>
          
          <div className='login-form'>
            <div className='login-form-left-part'>
              <form >
                <label>UserName/Email:
                <input 
                  placeholder='Username/Email'
                  type="email" 
                  name="username"
                />
                </label>
                <label>Password:
                  <input 
                    placeholder='Password'
                    type="password" 
                    name="Password" 
                  />
                  </label>
                  <div>
                    <span><Checkbox/>Remember Password?</span>
                    <span>Forgot Password?</span>
                  </div>
                  <submit type="submit">LOGIN</submit>
                  <div>
                New User? <span>Create an Account</span>
              </div>
              </form>

              

            </div>
            <div className='login-form-right-part'>
              <img src={logo}/>

            </div>

          </div>
        </div>
        
        <MyFooter/>
    </div>
  )
}

export default Home