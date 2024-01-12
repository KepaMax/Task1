import React from 'react'

function Navbar() {
  return (
    <div className='w-full h-[100px] bg-zinc-400 flex justify-between items-center px-10'>
        <label htmlFor="">example@gmail.com</label>
        <button className='text-xl font-bold rounded-[7px] h-2/4 px-10 bg-[#f6b819] hover:bg-yellow-700'>Log out</button>
    </div>
  )
}

export default Navbar