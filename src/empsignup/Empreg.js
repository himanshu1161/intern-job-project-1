import React from 'react'
import './Empreg.css'
const Empreg = () => {
  return (
    <div>
      <h2 className='absolute left-[356px] top-[110px] font-[400] text-[32px]'>Complete Your Profile</h2>
      <p className='absolute left-[353px] top-[190px] text-[20px] font-[400]'> Employee Details</p>
      <div className="con1">
      <div className=' inline absolute  top-[10px] left-[10%]'>
        <label htmlFor="name" className='font-[400] text-[20px] ml-[0px] mb-[10px]'>First Name</label><br/>
        <input type="text" name='firstname' className='w-[265px] h-[50px] border border-solid rounded-2xl ' />
        </div>

        <div className='inline absolute top-[10px] left-[52.5%]'>
        <label htmlFor="name" className='font-[400] text-[20px] ml-[0px] mb-[10px]'>Last Name</label><br/>
        <input type="text" name='firstname' className='w-[265px] h-[50px] border border-solid rounded-2xl ' />
        </div>

        <div className=' inline absolute  top-[50%] left-[10%]'>
        <label htmlFor="name" className='font-[400] text-[20px] ml-[0px] mb-[10px]'>Emailid</label><br/>
        <input type="text" name='firstname' className='w-[265px] h-[50px] border border-solid rounded-2xl' />
        </div>

        <div className='inline absolute top-[50%] left-[52.5%]'>
        <label htmlFor="name" className='font-[400] text-[20px] ml-[0px] mb-[10px]'>Contact No</label><br/>
        <input type="text" name='firstname' className='w-[265px] h-[50px] border border-solid rounded-2xl' />
        </div>
      </div>
      {/* company details */}
      <h2 className='absolute left-[353px] top-[500px]'>Company Details</h2>
      <div className="con2">
      <div className=' inline absolute  top-[10%] left-[10%]'>
        <label htmlFor="name" className='font-[400] text-[20px] ml-[0px] mb-[10px]'>Name of the Company</label><br/>
        <input type="text" name='firstname' className='w-[461px] h-[50px] border border-solid rounded-2xl' />
        </div>

        <div className='inline absolute top-[10%] left-[70%]'>
        <label htmlFor="name" className='font-[400] text-[20px] ml-[0px] mb-[10px]'>Logo</label><br/>
        <input type="file" id='file1' name='firstname' className='w-[210px] h-[50px] border border-solid rounded-2xl' />
        </div>

        <div className=' inline absolute  top-[35%] left-[10%]'>
        <label htmlFor="name" className='font-[400] text-[20px] ml-[0px] mb-[10px]'> Company Email address</label><br/>
        <input type="text" name='firstname' className='w-[265px] h-[50px] border border-solid rounded-2xl' />
        </div>

        <div className='inline absolute top-[35%] left-[52.5%]'>
        <label htmlFor="name" className='font-[400] text-[20px] ml-[0px] mb-[10px]'>Contact No</label><br/>
        <input type="text" name='firstname' className='w-[265px] h-[50px] border border-solid rounded-2xl' />
        </div>

        <div className=' inline absolute  top-[50%] left-[10%]'>
        <label htmlFor="name" className='font-[400] text-[20px] ml-[0px] mb-[10px]'> Office address</label><br/>
        <input type="text" name='firstname' className='w-[695px] h-[50px] border border-solid rounded-2xl' />
        </div>
        
        <div className=' inline absolute  top-[65%] left-[10%]'>
        <label htmlFor="name" className='font-[400] text-[20px] ml-[0px] mb-[10px]'> City</label><br/>
        <input type="text" name='firstname' className='w-[227px] h-[50px] border border-solid rounded-2xl' />
        </div>
      
        <div className=' inline absolute  top-[65%] left-[40%]'>
        <label htmlFor="name" className='font-[400] text-[20px] ml-[0px] mb-[10px]'> State</label><br/>
        <input type="text" name='firstname' className='w-[227px] h-[50px] border border-solid rounded-2xl' />
        </div>

        <div className=' inline absolute  top-[65%] left-[70%]'>
        <label htmlFor="name" className='font-[400] text-[20px] ml-[0px] mb-[10px]'> Pincode</label><br/>
        <input type="text" name='firstname' className='w-[227px] h-[50px] border border-solid rounded-2xl' />
        </div>

        <div className=' inline absolute  top-[80%] left-[10%]'>
        <label htmlFor="name" className='font-[400] text-[20px] ml-[0px] mb-[10px]'> Certificate of incorporation</label><br/>
        <input type="text" name='firstname' className='w-[265px] h-[50px] border border-solid rounded-2xl ' />
        </div>
        

      </div>
      {/* about the company */}
      <div className="con3">
      <textarea name="about" id="" cols="50" rows="4" className='  absolute w-[722px] h-[200px] top-[10%] left-[5%] border border-solid rounded-2xl ' placeholder='A short description about the organization' ></textarea>
      </div>

      <div className="btn">
      <button className='absolute top-[1500px] left-[709px] rounded-[35px] bg-[#f97316] w-[116px] h-[40px] text-white font-[600] text-[24px] mb-[10px] '>Save</button>
      </div>
    </div>
  )
}

export default Empreg
