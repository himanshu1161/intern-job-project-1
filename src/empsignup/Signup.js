import React from 'react'
import './Signup.css'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'

const SignUp = () => {
  return (
    <>
    <Navbar/>
    <div className='container1 '>
      <h2 className='absolute top-[50px] left-[270px] text-[36px] font-[400]'>Signup!</h2>
      <form>
        <div className=' inline absolute  top-[120px] left-[10%]'>
        <label htmlFor="name" className='font-[400] text-[20px] ml-[0px] mb-[10px]'>First Name</label><br/>
        <input type="text" name='firstname' className='w-[265px] h-[50px] bg-[#D9D9D9]' />

        </div>
        <div className='inline absolute top-[120px] left-[52.5%]'>
        <label htmlFor="name" className='font-[400] text-[20px] ml-[0px] mb-[10px]'>Last Name</label><br/>
        <input type="text" name='firstname' className='w-[265px] h-[50px] bg-[#D9D9D9]' />
        </div>

        <div className='inline absolute top-[220px] left-[10%]'>
        <label htmlFor="cname" className='font-[400] text-[20px] ml-[0px] mb-[10px]'>Name of the company</label><br/>
        <input type="text" name='firstname' className='w-[570px] h-[50px] bg-[#D9D9D9]' />
        </div>

        <div className='inline absolute top-[320px] left-[10%]'>
        <label htmlFor="email" className='font-[400] text-[20px] ml-[0px] mb-[10px]'>email id</label><br/>
        <input type="text" name='firstname' className='w-[570px] h-[50px] bg-[#D9D9D9]' />
        </div>

        <div className='inline absolute top-[420px] left-[10%]'>
        <label htmlFor="name" className='font-[400] text-[20px] ml-[0px] mb-[10px]'>password</label><br/>
        <input type="text" name='firstname' className='w-[570px] h-[50px] bg-[#D9D9D9]' />
        </div>
       <Link to='/empreg'>
        <button className='absolute top-[530px] left-[300px] rounded-[35px] bg-[#D9D9D9] w-[116px] h-[40px]'>Submit</button>
        </Link>
      </form>
    </div>
    </>
  )
}

export default SignUp
