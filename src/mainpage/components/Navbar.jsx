import React from 'react'

function Navbar({email, setAuthorized }) {
  return (
    <div className='w-full h-[100px] bg-zinc-300 flex justify-between items-center px-10'>
      <label className='font-bold'>{email}</label>
      <button
        onClick={() => setAuthorized(false)}
        className='text-xl font-bold rounded-[7px] h-2/4 px-10 bg-[#f6b819] hover:bg-yellow-700'>Log out</button>
    </div>
  )
}

export default Navbar