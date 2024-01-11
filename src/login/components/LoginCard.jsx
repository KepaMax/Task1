import React from 'react'

function LoginCard() {
  return (
    <form className='flex flex-col items-center justify-center w-[700px] h-[310px] shadow-md shadow-zinc-300 rounded-[13px]'>
      <h2 className='text-3xl font-bold mb-5'>Login Form</h2>
      <div className='flex flex-col'>
        <label>Email</label>
        <input type="email" className='border border-zinc-300 rounded-[6px] my-2' />
      </div>
      <button type='submit' className='bg-[#f6b819] px-5 py-2 rounded-[7px]'>Submit</button>
    </form>
  )
}

export default LoginCard